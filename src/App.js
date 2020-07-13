import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import { Router } from "@reach/router";

function Home() {
  return (
    <main
      className="flex  justify-center items-center bg-fixed bg-gray-400"
      style={{
        height: "calc(100vh - 4.8rem)",
        background: "url('./images/campus.jpg') center/cover no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="flex flex-col justify-center items-center text-white ">
        <h1 className="text-6xl font-bold ">Welcome to</h1>
        <h2 className="text-4xl font-medium">Admas University Alumni System</h2>
        <button className="bg-primary text-lg px-5 py-3 mt-8 rounded-md">
          Learn More &#xbb;
        </button>
      </div>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </div>
  );
}

export default App;
