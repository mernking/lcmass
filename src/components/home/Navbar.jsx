import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-background w-full py-4 px-3 flex justify-between items-center">
      <div className="logo">
        <h1>LCmass</h1>
      </div>
      <div className="navbtns">
        <div className="desktop hidden sm:block flex flex-row text-sm">
          <Link href="#hero">
            <p>Home</p>
          </Link>
          <Link href="#about">
            <p>About</p>
          </Link>
          <Link href="#hero">
            <p>Features</p>
          </Link>
          <Link href="/download">
            <p>Download</p>
          </Link>
          <Link href="#hero">
            <p>Docs</p>
          </Link>
        </div>
        <div className="mobile w-full sm:hidden flex flex-col gap-2 px-2 py-2">
          <Link href="#hero">
            <p>Home</p>
          </Link>
          <Link href="#about">
            <p>About</p>
          </Link>
          <Link href="#hero">
            <p>Features</p>
          </Link>
          <Link href="/download">
            <p>Download</p>
          </Link>
          <Link href="#hero">
            <p>Docs</p>
          </Link>
          <div className="account_log flex flex-row">
            <div className="login">
              <Link href="/login">
                <p>login</p>
              </Link>
            </div>
            <div className="signup">
              <Link href="/signup">
                <p>sign up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="account_log flex flex-row hidden sm:block">
        <div className="login">
          <Link href="/login">
            <p>login</p>
          </Link>
        </div>
        <div className="signup">
          <Link href="/signup">
            <p>sign up</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
