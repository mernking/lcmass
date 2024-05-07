"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
        // rememberMe,
      });
      if (response.data.message == "User already exists") {
        window.location.href = "/login";
      }

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-[100dvh]">
      <div className="card-container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="container">
          <div className="log-card">
            <p className="heading">Sign Up</p>
            <p>Welcome, we're excited to have you!</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <p className="text">Username</p>
                <input
                  className="input"
                  type="text"
                  placeholder="For Ex: Jayakrishna007"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <p className="text">Email</p>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text">Password</p>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* <div className="password-group">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="label">Remember Me</label>
                </div>
              </div> */}

              <button className="btn" type="submit">
                Sign up
              </button>
            </form>

            <p className="no-account">
              Already have an account?{" "}
              <Link href="/login" className="link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
