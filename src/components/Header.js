import React, { useState } from "react";
import { Link } from "@reach/router";

export default function Header() {
  let [dropDown, setDropDown] = useState(true);

  console.log(dropDown);

  return (
    <header className="bg-primary text-white flex justify-around items-center py-4">
      <div className="logo">
        <a href="/home">
          <img className="h-8" src="./images/logo.png" alt="" />
        </a>
      </div>

      <ul className="flex w-5/12 justify-around items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setDropDown(!dropDown)}
            className="hover:border  focus:border-blue-800 focus:outline-none focus:shadow-outline"
          >
            Alumni
          </button>
          <span
            className="absolute text-lg"
            style={{ top: "10px", right: "-15px" }}
          >
            &#129171;
          </span>
          <ul
            className={`${
              dropDown ? "hidden" : ""
            } absolute text-lg bg-gray-100 text-primary p-4`}
          >
            <li className="mb-3 px-3 hover:bg-blue-200">
              <Link to="/news">News</Link>
            </li>
            <li className="mb-3 px-3 hover:bg-blue-200">
              <Link to="/events">Events</Link>
            </li>
            <li className="mb-3 px-3 hover:bg-blue-200">
              <Link to="/board">Board</Link>
            </li>
            <li className="mb-3 px-3 hover:bg-blue-200">
              <Link to="/members">Members</Link>
            </li>
          </ul>
        </li>
        <li>Donate</li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="border px-4 py-2 rounded-md hover:bg-blue-400 font-bold">
            <Link to="/login"> Sign in</Link>
          </button>
        </li>
      </ul>
    </header>
  );
}
