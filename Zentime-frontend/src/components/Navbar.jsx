import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lougoutUser } from "../JS/actions/authActions";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(lougoutUser());
    setDropdownOpen(false);
    navigate("/login");
    console.log("Logout");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 shadow bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <Logo />

          {/* Center Nav - Desktop only */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/brand"
              className="text-gray-300 hover:text-cyan-400 font-medium"
            >
              Buy a Watch
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop auth links */}
            {!isAuth && (
              <>
                {" "}
                <Link
                  to="/login"
                  className="hidden md:inline text-gray-300 hover:text-cyan-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hidden md:inline text-gray-300 hover:text-cyan-400"
                >
                  Register
                </Link>{" "}
              </>
            )}

            {/* Profile dropdown */}
            {isAuth && (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <img
                    src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                    alt="Profile"
                    className="rounded-full w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      onClick={handleLogout}
                      className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Disconnect
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Burger icon - Mobile only */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-300 focus:outline-none hover:text-cyan-400"
              >
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-slate-900">
          <Link to="/" className="block text-gray-300 hover:text-cyan-400">
            Home
          </Link>
          <Link to="/brand" className="block text-gray-300 hover:text-cyan-400">
            Buy a Watch
          </Link>
          <Link
            to="/contact"
            className="block text-gray-300 hover:text-cyan-400"
          >
            Contact
          </Link>
          <Link to="/login" className="block text-gray-300 hover:text-cyan-400">
            Login
          </Link>
          <Link
            to="/register"
            className="block text-gray-300 hover:text-cyan-400"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
