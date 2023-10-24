"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
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
      <div className="flex flex-col gap-6 justify-center items-center border-[1px] border-gray-400 rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-[48px] text-gray-300">Welcome</h1>
          <p className="text-gray-300">We are glad to see you back with us</p>
        </div>

        <input
          type="text"
          placeholder="Username"
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
        <div className="border-b-[1px] border-gray-400 w-80"></div>

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

export default Login;
