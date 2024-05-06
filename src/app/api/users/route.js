import { NextResponse, NextRequest } from "next/server";
import connection from "../../../../utility";
import User from "../../../../models/user";


export async function GET(req, res) {
  try {
    return NextResponse.json({message: "got you man"});
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    })
  }
}

export async function POST(req, res) {
  try {
    const db = await connection();

    if (!db) {
      return NextResponse.json({ message: "Connection error" });
    }

    const body = req.body;

    if (body) {
      const user = await User.create(req.body);
      return NextResponse.json({ user });
    }
    return NextResponse.json({ message: "no body request" });
  } catch (error) {
    return NextResponse.json({
      message: `${error.message}`,
    });
  }
}
