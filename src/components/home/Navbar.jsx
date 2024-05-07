"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./nav.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dmood, setDmood] = useState(false);

  function toggleTheme() {
    var htel = document.querySelector("html");
    htel.classList.toggle("dark");
    if (htel.classList.contains("dark")) {
      setDmood(true);
    }
  }

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
    <div className="w-full flex justify-center items-center h-fit">
      <header className="bg-background flex justify-between items-center px-6 py-5">
        <div className="logo flex gap-2">
          <div className="logomain font-bold">
            <h1>LCmass</h1>
          </div>

          <div className="theme text-text">
            <button onClick={toggleTheme}>
              <p>
                {dmood ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-sun-high"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656zM6.343 17.657l-1.414 1.414M6.343 6.343l-1.414-1.414M17.657 6.343l1.414-1.414M17.657 17.657l1.414 1.414M4 12h-2M12 4v-2M20 12h2M12 20v2" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                    />
                  </svg>
                )}
              </p>
            </button>
          </div>
        </div>
        <div className="navlinks">
          {/* Mobile Menu */}
          <div className="mobile sm:hidden" onClick={toggleMenu}>
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
          <div className="desktop w-fit flex flex-row gap-2 px-3">
            <Link href="#home">
              <p className="menu-link w-fit px-3 py-2 hover:scale-[1.2] hover:text-primary">
                Home
              </p>
            </Link>
            <Link href="#about">
              <p className="menu-link w-fit px-3 py-2 hover:scale-[1.2] hover:text-primary">
                About
              </p>
            </Link>
            <Link href="#features">
              <p className="menu-link w-fit px-3 py-2 hover:scale-[1.2] hover:text-primary">
                Features
              </p>
            </Link>
            <Link href="/download">
              <p className="menu-link w-fit px-3 py-2 hover:scale-[1.2] hover:text-primary">
                Download
              </p>
            </Link>
            <Link href="/doc">
              <p className="menu-link w-fit px-3 py-2 hover:scale-[1.2] hover:text-primary">
                Doc
              </p>
            </Link>
          </div>
        </div>
        {/* Account Links */}
        <div className="account_logd text-center flex flex-row justify-center w-fit items-center gap-2 text-text">
          <div className="login px-3 py-2 w-fit hover:scale-[1.2] hover:text-primary">
            <Link href="/login">
              <button>
                <p>log in</p>
              </button>
            </Link>
          </div>
          <div className="signup px-3 py-2 w-fit hover:scale-[1.2] hover:text-primary">
            <Link href="/signup">
              <button>
                <p>sign up</p>
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
