import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white flex justify-around items-center py-4">
      <div className="logo">
        <a href="/home">
          <img className="h-8" src="./images/logo.png" alt="" />
        </a>
      </div>

      <ul className="flex w-5/12 justify-around items-center">
        <li>Home</li>
        <li>Alumni</li>
        <li>Donate</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button className="border px-4 py-2 rounded-md hover:bg-blue-400 font-bold">
            Sign in
          </button>
        </li>
      </ul>
    </header>
  );
}
