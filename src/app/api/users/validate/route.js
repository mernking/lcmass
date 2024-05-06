import connection from "../../../../../utility";
import User from "../../../../../models/user";
import { NextResponse } from "next/server";

await connection();

export async function POST(req, res) {
  try {
    const data = await req.json();
    // Check if required fields are provided
    if (!data.password || !data.email ) {
      return NextResponse.json({
        message: "Missing required fields: password, email",
      });
    }

    const existingUser = await User.findOne({ email: data.email, password: data.password });

    if (existingUser) {

      return NextResponse.json({
        message: "validated log in successfully",
      });
    }
    return NextResponse.json({message: "user not validated"});
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}