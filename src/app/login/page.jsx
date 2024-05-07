"use client";
import { useState } from "react";
import axios from "axios";
import page from "../reset/page";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/validate", {
        email,
        password,
        // rememberMe
      });

      if (response.data.message === "Validated login successfully") {
        window.location.href = "/dashboard";
      } else if (response.data.message === "User not found") {
        window.location.href = "/signup";
      } else {
        window.location.href = "/";
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
            <p className="heading">Welcome Back</p>
            <p>We are happy to have you Again</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
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
                <a href="/reset" className="forget-password">
                  Forget Password
                </a>
              </div> */}

              <button type="submit" className="btn">
                Sign In
              </button>
            </form>

            <p className="no-account">
              Don't Have an Account ?{" "}
              <Link href="/signup" className="link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
