import React from "react";

const Logo = () => {
  return (
    <div
      className="text-3xl font-extrabold cursor-pointer"
      style={{ fontFamily: "'Quicksand', sans-serif", letterSpacing: "0.05em" }}
    >
      <a
        href="/"
        className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:brightness-110 transition"
      >
        Zen<span className="text-white">time</span>
      </a>
    </div>
  );
};

export default Logo;
