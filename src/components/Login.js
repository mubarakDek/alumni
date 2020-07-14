import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col pt-12  justify-center items-center">
      <form className="w-full max-w-sm">
        <div className="md:flex md:flex-col  mb-6">
          <div className="">
            <label
              className="block text-primary  font-bold md:text-left mb-2  pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="md:flex md:flex-col  mb-6">
          <div className="">
            <label
              className="block text-primary  font-bold md:text-left mb-2  pr-4"
              for="inline-full-name"
            >
              Password
            </label>
          </div>
          <div className="">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="password"
              placeholder="****************"
            />
          </div>
        </div>
        <div className="md:flex justify-between mb-6">
          <label className="block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Remember me</span>
          </label>
          <div>
            <a className="underline text-primary" href="/login">
              Forget Password?
            </a>
          </div>
        </div>
        <div className="md:flex md:items-center justify-end">
          <button
            className="shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
            type="button"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-16">
        <span>------- </span>
        <p className="px-4">Or Sign in with</p>
        <span> -------</span>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-12 h-12 bg-blue-300 rounded-full m-3">
          <a href="/login">
            <img src="./images/facebook.png" alt="" />
          </a>
        </div>
        <div className="w-12 h-12 bg-blue-300 rounded-full m-3">
          <a href="/login">
            <img src="./images/google.png" alt="" />
          </a>
        </div>
      </div>
      <div className="flex bg-blue-200 py-3 px-16 rounded-md mt-4">
        <p>New User?</p>
        <a className="underline text-primary ml-4" href="/login">
          Create Account
        </a>
      </div>
    </div>
  );
}
