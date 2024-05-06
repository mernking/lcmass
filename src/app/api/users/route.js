import { NextResponse, NextRequest } from "next/server";
import connection from "../../../../utility";
import User from "../../../../models/user";

await connection();

export async function GET(req, res) {
  try {
    const data = await req.json(); // Assuming you're passing email as a query parameter

    const user = await User.findOne({ email: data.email });

    if (!user) {
      return NextResponse.json({ message: "No user found" });
    }

    // You might not want to return the entire user object here for security reasons
    // Depending on what you need, you might only want to return certain fields
    return NextResponse.json({ message: "User found", user: user.email });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
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
    const user = new User(data);
    await user.save();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}
