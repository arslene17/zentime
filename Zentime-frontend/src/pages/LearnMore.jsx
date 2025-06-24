import React from "react";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Discover the World of Watches
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-center">
          From Swiss valleys to Japanese workshops, watches have shaped
          cultures, industries, and personal identity for centuries. At{" "}
          <span className="font-semibold">Zentime</span>, we invite you to
          explore the fascinating world of horology — where history,
          craftsmanship, and style come together.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3">A Global Heritage</h2>
            <p>
              Watches have roots across the globe — from the precision of Swiss
              automatics, to German Bauhaus-inspired designs, to the innovation
              of Japanese quartz. Each region brings its own tradition,
              techniques, and philosophy to timekeeping.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3">Beyond Time</h2>
            <p>
              A watch is more than a tool — it's an expression. Whether it's a
              luxury piece passed down through generations, a modern smartwatch
              on your wrist, or a minimalist daily driver, every watch tells a
              story about who you are and where you've been.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-3">Explore Watchmaking</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Discover the evolution of watches from sundials to smartwatches
            </li>
            <li>
              Learn about movements: quartz, mechanical, automatic, and hybrid
            </li>
            <li>Understand the craftsmanship behind luxury brands</li>
            <li>Get inspired by global styles and trends across eras</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-3">Why Zentime?</h2>
          <p>
            Zentime isn’t just a marketplace — it's a gateway into the universe
            of horology. Whether you’re a curious beginner or a seasoned
            collector, we offer knowledge, guidance, and handpicked collections
            that reflect watchmaking excellence from around the world.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/brand"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Start Your Watch Journey
          </a>
        </div>
      </div>
    </div>
  );
}
