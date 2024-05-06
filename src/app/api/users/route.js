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
      return NextResponse.json({
        message: "Missing required fields: password, email, and name",
      });
    }

    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    const newpass = await bcrypt.genSalt(data.password, 10);
    const dataUpdate = {
      name: data.name,
      email: data.email,
      password: newpass,
    }

    const user = new User(dataUpdate);
    await user.save();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}
