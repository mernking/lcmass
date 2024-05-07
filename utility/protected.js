// middleware/auth.js

import { verify } from "jsonwebtoken";

export const authenticateUser = (handler) => async (req, res) => {
  // Check if user is authenticated
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "You are not authenticated" });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
