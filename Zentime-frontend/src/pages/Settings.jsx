import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../JS/actions/authActions";

export default function Settings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    theme: "light",
    language: "en",
  });

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Placeholder: send updated settings to backend if needed
    console.log("Saved settings:", formData);
    alert("Settings saved!");
  };

  if (!isAuth || !user) {
    return (
      <div className="text-center text-gray-600 mt-10">
        Please log in to access settings.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
          <p className="text-gray-500 text-sm">
            Manage your account preferences
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-900 border-gray-300 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-900 border-gray-300 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2 text-gray-900 border-gray-300 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-900 border-gray-300 sm:text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-900 border-gray-300 sm:text-sm"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={handleSave}
            className="rounded-md bg-indigo-600 px-6 py-2 text-white text-sm font-semibold hover:bg-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
