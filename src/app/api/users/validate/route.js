import connection from "../../../../../utility";
import User from "../../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

await connection();

export async function POST(req, res) {
  try {
    const data = await req.json();
    // Check if required fields are provided
    if (!data.password || !data.email) {
      return NextResponse.json({
        message: "Missing required fields: password, email",
      });
    }

    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      data.password,
      existingUser.password
    );

    if (passwordMatch) {
      return NextResponse.json({
        message: "Validated login successfully",
      });
    } else {
      return NextResponse.json({ message: "Incorrect password" });
    }
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}