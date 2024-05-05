import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-background w-full py-4 px-3">
      <div className="logo">
        <h1>LCmass</h1>
      </div>
      <div className="navbtns">
        <div className="desktop sm:block flex flex-row text-sm">
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
        <div className="mobile sm:hidden flex flex-col gap-2 px-2 py-2">
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
      </div>
    </header>
  );
}
