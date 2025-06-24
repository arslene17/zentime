import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdWatch } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6 text-center">
      <MdWatch className="text-6xl text-gray-500 mb-6 animate-pulse" />
      <h1 className="text-7xl font-extrabold tracking-widest text-gray-700 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Ticking
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Looks like this page stopped keeping time. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-200 font-medium"
      >
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
