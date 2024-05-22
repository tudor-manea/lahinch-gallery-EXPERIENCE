"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Session } from "next-auth";

const Navbar = ({ user }: Session) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMobileMenu]);

  return (
    <nav className="w-full bg-black text-white z-99">
      <div
        className="w-[89%]
       m-auto flex justify-between 
       items-center lg:max-w-[1500px]
       py-5"
      >
        <Link href="/" className="font-bold text-2xl">
          Lahinch Gallery <span className="text-blue-300">Experience</span>
        </Link>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-16 w-full bg-blue-300 py-5 z-10 ${
            openMobileMenu ? "left-0" : "left-[-100rem]"
          }`}
        >
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/artists"}>Artists</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex flex-col gap-5 items-center mt-4">
              <Link href={"./api/auth/signin"}>
                <button className="bg-white text-black px-3 rounded-sm">
                  Login
                </button>
              </Link>
              <Link href={"/signup"}>
                <button className="bg-white text-black px-3 rounded-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5 items-center mt-4">
              <span>Hello {user.name}!</span>
              <Link
                className="bg-white text-black px-3 rounded-sm"
                href={"./api/auth/signout"}
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE MENU ICONS */}
        <button className="md:hidden" onClick={menuHandler}>
          {openMobileMenu ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/artists"}>Artists</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>

          {!user ? (
            <div className="flex gap-5 items-center">
              <Link href={"/api/auth/signin"}>
                <button className="bg-blue-300 text-black px-3 rounded-sm">
                  Login
                </button>
              </Link>
              <Link href={"/signup"}>
                <button
                  className="bg-blue-300 text-black px-3 
              rounded-sm"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <Link
                className="bg-blue-300 text-black px-3 rounded-sm"
                href={"/api/auth/signout"}
              >
                Signout
              </Link>
              <img
                src={user?.image as string}
                alt={user.name as string}
                width={35}
                height={35}
                className="rounded-full cursor-pointer outline-blue-300"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;