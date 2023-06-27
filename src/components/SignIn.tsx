import Link from "next/link";
import React from "react";
import Logo from "./ui/Logo";
import GoogleIcon from "./ui/GoogleIcon";
import { Poppins } from "next/font/google";
import { buttonVariants } from "./ui/Button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function SignIn() {
  return (
    <form className="mx-auto flex w-[33rem] flex-col items-center justify-center rounded-lg border border-gray-700 p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Sign In to <Logo />
      </h1>

      <div className="flex flex-col">
        <div className="my-4 flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-2xl font-bold text-pink-600"
            style={poppins.style}
          >
            Your Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="w-[30rem] rounded-md bg-slate-700 p-4 text-2xl text-slate-200 outline-pink-600 focus:outline"
          />
        </div>

        <div className="my-4 flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-2xl font-bold text-pink-600"
            style={poppins.style}
          >
            Your Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            className="w-[30rem] rounded-md bg-slate-700 p-4 text-2xl text-slate-200 outline-pink-600 focus:outline"
          />
        </div>

        <button
          type="submit"
          className={`${buttonVariants({
            variant: "pink",
          })} mt-4 py-6 text-[1.5rem]`}
        >
          Sign In
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <p className="mt-4 font-bold">Or</p>

        <button className="flex items-center gap-4 rounded-md bg-slate-950 p-4 hover:bg-slate-800">
          <GoogleIcon />
          <p className="text-slate-50">Sign In With Google</p>
        </button>

        <p>
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-bold text-pink-600">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
