// pages/api/verify-token.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    const { token } = req.body;
    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Token not provided",
      });
    }

    // Verify token
    jwt.verify(token, 'mellowking', (err, decoded) => {
      if (err) {
        return NextResponse.json({ success: false, message: "Invalid token" });
      } else {
        // Token is valid
        // You can perform additional checks here if needed
        return NextResponse.json({ success: true, user: decoded, message: "Valid token" });
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `${error.message}`,
    });
  }
}
