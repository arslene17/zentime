import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0f1c2e] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-4">Buy on Zentime</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Buyer Protection</a>
              </li>
              <li>
                <a href="#">Escrow Payment</a>
              </li>
              <li>
                <a href="#">Authenticity Guarantee</a>
              </li>
              <li>
                <a href="#">Easy Returns</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Sell on Zentime</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Private Seller Info</a>
              </li>
              <li>
                <a href="#">Commercial Sales</a>
              </li>
              <li>
                <a href="#">Free Appraisals</a>
              </li>
              <li>
                <a href="#">Selling Advice</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About Zentime</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Legal Info</a>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
            </ul>
          </div>

          {/* Zentime Apps & Payment Methods */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Apps with QR */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Zentime Apps</h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* App Buttons */}
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-md text-white justify-center sm:justify-start w-full sm:w-auto"
                  >
                    <FaApple className="text-xl" />
                    <span>Download on the App Store</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-md text-white justify-center sm:justify-start w-full sm:w-auto"
                  >
                    <FaGooglePlay className="text-xl" />
                    <span>Get it on Google Play</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Payment Methods</h4>
              <div className="flex flex-wrap items-center gap-4 text-2xl text-gray-400 justify-center sm:justify-start">
                <div className="bg-white px-3 py-1 rounded shadow">
                  <FaCcVisa className="text-[#1a1f71]" />
                </div>
                <div className="bg-white px-3 py-1 rounded shadow">
                  <FaCcMastercard className="text-[#eb001b]" />
                </div>
                <div className="bg-white px-3 py-1 rounded shadow">
                  <FaCcAmex className="text-[#2e77bb]" />
                </div>
                <div className="bg-white px-3 py-1 rounded shadow flex items-center gap-1">
                  <MdOutlineAccountBalance className="text-black" />
                  <span className="text-sm font-medium text-black">
                    Wire transfer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Zentime. All rights reserved.</p>
          <p>Terms of Use | Privacy Policy | Cookies</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.x.com/" className="hover:text-white">
              <SiX />
            </a>
            <a
              href="https://www.instagram.com
"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a href="https://www.github.com/" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
