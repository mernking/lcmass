"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./nav.css"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menu = document.getElementById("mobile_menu");
    if (isMenuOpen) {
      anime({
        targets: menu,
        translateX: 0,
        opacity: 1,
        duration: 300,
        easing: "easeOutExpo",
      });
    } else {
      anime({
        targets: menu,
        translateX: "-100%",
        opacity: 0,
        duration: 300,
        easing: "easeOutExpo",
      });
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-background flex justify-between items-center px-6 py-5">
      <div className="logo">
        <h1>LCmass</h1>
      </div>
      <div className="navlinks">
        {/* Mobile Menu */}
        <div className="mobile sm:hidden">
          <button
            onClick={toggleMenu}
            className="menu_button"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`stroke-current ${
                isMenuOpen ? "text-primary" : "text-text"
              }`}
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div
            id="mobile_menu"
            className={`absolute top-0 left-0 w-full px-10 sm:hidden text-center bg-accent py-4`}
          >
            <div className="w-full py-2 text-right">
              <button
                onClick={toggleMenu}
                className="menu_button"
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`stroke-current ${
                    isMenuOpen ? "text-primary" : "text-text"
                  }`}
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <Link href="#home">
              <p className="menu-link">Home</p>
            </Link>
            <Link href="#about">
              <p className="menu-link">About</p>
            </Link>
            <Link href="#features">
              <p className="menu-link">Features</p>
            </Link>
            <Link href="/download">
              <p className="menu-link">Download</p>
            </Link>
            <Link href="/doc">
              <p className="menu-link">Doc</p>
            </Link>
            <div className="account_log py-5 w-full text-center flex flex-row justify-center items-center gap-4 text-text">
              <div className="login">
                <Link href="/login">
                  <button>
                    <p>log in</p>
                  </button>
                </Link>
              </div>
              <div className="signup">
                <Link href="/signup">
                  <button>
                    <p>sign up</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="desktop flex flex-row gap-4">
          <Link href="#home">
            <p className="menu-link hover:text-primary">Home</p>
          </Link>
          <Link href="#about">
            <p className="menu-link hover:text-primary">About</p>
          </Link>
          <Link href="#features">
            <p className="menu-link hover:text-primary">Features</p>
          </Link>
          <Link href="/download">
            <p className="menu-link hover:text-primary">Download</p>
          </Link>
          <Link href="/doc">
            <p className="menu-link hover:text-primary">Doc</p>
          </Link>
        </div>
      </div>
      {/* Account Links */}
      <div className="account_logd text-center flex flex-row justify-center items-center gap-2 text-text">
        <div className="login hover:text-primary">
          <Link href="/login">
            <button>
              <p>log in</p>
            </button>
          </Link>
        </div>
        <div className="signup hover:text-primary">
          <Link href="/signup">
            <button>
              <p>sign up</p>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
