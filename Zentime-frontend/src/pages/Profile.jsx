import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../JS/actions/authActions"; // adjust the path as needed

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    dispatch(currentUser()); // fetch user on mount
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleEdit = () => setEditing(true);

  const handleSave = () => {
    // In a real app you'd send this update to the server here
    console.log("Updated info:", formData);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // or dispatch({ type: LOGOUT })
  };



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <div className="flex flex-col items-center">
          <img
            src={
              user.avatar ||
              "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            }
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {formData.firstName} {formData.lastName}
          </h2>
          <p className="text-gray-600">{formData.email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              disabled={!editing}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 sm:text-sm ${
                editing
                  ? "border-gray-300 focus:outline-indigo-600"
                  : "bg-gray-100 border-gray-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              disabled={!editing}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 sm:text-sm ${
                editing
                  ? "border-gray-300 focus:outline-indigo-600"
                  : "bg-gray-100 border-gray-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              disabled={!editing}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 sm:text-sm ${
                editing
                  ? "border-gray-300 focus:outline-indigo-600"
                  : "bg-gray-100 border-gray-200"
              }`}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          {editing ? (
            <button
              onClick={handleSave}
              className="w-full mr-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-semibold hover:bg-indigo-500"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="w-full mr-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleLogout}
            className="w-full ml-2 rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
