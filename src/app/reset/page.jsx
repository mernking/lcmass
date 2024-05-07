import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex justify-center items-center h-[100dvh]">
      <div class="login-box">
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            <Link href="#">
              SEND
              <span></span>
            </Link>
          </center>
        </form>
        <div className="w-full text-center text-white">
          <Link href="/login">Back to login</Link>
        </div>
      </div>
    </div>
  );
}
