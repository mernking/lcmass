import { NextResponse, NextRequest } from "next/server";
import connection from "../../../../utility";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

await connection();

export async function GET(req, res) {
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(req, res) {
  try {
    const data = await req.json();
    // Check if required fields are provided
    if (!data.password || !data.email || !data.name) {
      return res.status(400).json({
        message: "Missing required fields: password, email, and name",
      });
    }

    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const newUser = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}
