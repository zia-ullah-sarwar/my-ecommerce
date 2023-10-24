"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import LoginLottie from "../Lottiefiles/signup.json";
import Link from "next/link";

const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginLottie,
  };

  const { user, googleSignIn, logOut } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col gap-5 justify-center border-[1px]  rounded-lg p-8 border-gray-400">
        <div className="text-center">
          <h1 className="text-[48px] text-gray-300">Signup</h1>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="border-[1px] bg-transparent text-gray-300 p-3 w-80 rounded-[13px] border-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-[1px] bg-transparent text-gray-300 p-3 w-80 rounded-[13px] border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-[1px] bg-transparent text-gray-300 p-3 w-80 rounded-[13px] border-gray-400"
        />
        <button
          className="bg-gray-300 text-black
           p-3 w-80 rounded-[13px]"
        >
          Next
        </button>
        <p className="text-xs text-gray-300">
          Already have an account?
          <Link href="/login">
            {" "}
            <span className="text-xs font-bold text-gray-300">Login</span>
          </Link>
        </p>
        <div className="border-b-[1px] border-gray-300 w-80"></div>

        <button
          onClick={handleSignIn}
          className="bg-transparent p-3 w-80  border-gray-400 border-[1px] rounded-[13px]"
        >
          <div className="flex justify-center text-gray-300 items-center gap-3">
            <div className="text-xl">
              <FcGoogle />
            </div>
            Login with Google
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
