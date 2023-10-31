"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import Logo from "@/public/asests/images/logo.png";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const displayNameFirstWord = user ? user.displayName.split(" ")[0] : "";

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {}
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full bg-black text-gray-200 border-b-2 items-center flex justify-between px-10">
      <div>
        <Link href="/">
          <Image src={Logo} alt="app-logo" height={200} width={200}></Image>
        </Link>
      </div>
      <ul className="flex items-center">
        <li className="p-2 cursor-pointer ">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer ">
          <Link href="/about">About</Link>
        </li>
        {user ? (
          <li className="p-2 cursor-pointer ">
            <Link href="/profile">Profile</Link>
          </li>
        ) : null}
        {loading ? null : !user ? (
          <div className="flex items-center">
            <Link href="/login">
              <li
                className="bg-gray-300 text-black border-[1px] border-black mr-2
           p-2 rounded-[13px] cursor-pointer"
              >
                Login
              </li>
            </Link>
            <Link href="/signup">
              <li
                className="bg-black text-gray-300
           p-2 rounded-[13px] cursor-pointer border-2 border-gray-100"
              >
                Signup
              </li>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <p className="bg-green-500 text-gray-700 px-2 rounded-[13px]">
              {displayNameFirstWord}
            </p>
            <p
              className="bg-black text-gray-300
           p-3 rounded-[13px] cursor-pointer"
              onClick={handleSignOut}
            >
              Sign out
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
