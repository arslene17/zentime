import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl p-8">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question about our watches, pricing, or anything else? Our
            team is here to help!
          </p>

          <div className="space-y-4 text-gray-700 text-md">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-black" />
              <span>123 Time St, Chrono City, Watchland</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-black" />
              <span>+216 12 345 678</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-black" />
              <span>support@zentime.com</span>
            </div>
          </div>


        </div>

        {/* Right: Contact Form */}
        <form className="space-y-5">
          <h3 className="text-2xl font-semibold text-gray-800">
            Send Us a Message
          </h3>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
