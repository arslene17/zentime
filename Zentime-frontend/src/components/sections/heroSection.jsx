import React from "react";
import { FaArrowRight, FaGlobe, FaTools, FaRegClock } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-400 via-white to-gray-200 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex items-center">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-evenly py-12">
          {/* Left Side */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Discover Timeless Elegance
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              entime is your gateway to the world’s finest timepieces. Whether
              you are beginning your collection or seeking rare finds, our
              passion for quality and timeless design is unmatched.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={() => (window.location.href = "/brand")}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
              >
                Shop Now <FaArrowRight />
              </button>
              <button
                onClick={() => (window.location.href = "/learn_more")}
                className="border border-gray-800 px-6 py-3 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="max-w-sm w-full">
            <img
              src="https://www.pngmart.com/files/3/Branded-Watch-Transparent-PNG.png"
              alt="Watch"
              className="rounded-3xl  w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Zentime?
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            At Zentime, we blend heritage, technology, and luxury to deliver
            watches that transcend time. Here's what makes us different:
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaGlobe className="text-3xl text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Selection</h3>
              <p className="text-gray-800">
                Discover watches from iconic brands across Switzerland, Japan,
                Germany, and beyond.
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaTools className="text-3xl text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p className="text-gray-800">
                Hand-picked collections featuring precise movements and
                artisan-quality finishes.
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaRegClock className="text-3xl text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Timeless Support</h3>
              <p className="text-gray-800">
                Our experts are here to guide you — from choosing your first
                timepiece to building a collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
