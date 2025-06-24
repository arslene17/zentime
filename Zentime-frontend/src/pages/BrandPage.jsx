import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWatchesByBrand } from "../JS/actions/watchActions"; // ✅ Corrected import
import AddNewWatch from "../components/sections/AddNewWatch";

export default function BrandPage() {
  const { brand } = useParams(); 
  const dispatch = useDispatch();

  const watches = useSelector((state) => state.watchReducer.watches);
  // const watchSuccess = useSelector((state) => state.watchReducer.success);
  const loading = useSelector((state) => state.watchReducer.loading);
  const error = useSelector((state) => state.watchReducer.errors);

  useEffect(() => {
    dispatch(getWatchesByBrand(brand)); // ✅ Corrected action name
  }, [dispatch, brand]);

  console.log("Brand:", brand);
  console.log("Watches:", watches);
  console.log("eRRORS:", error);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{brand} Watches</h1>
        <p className="text-center text-gray-600 mb-6">
          Explore our collection of {brand} watches, featuring the latest
          designs and timeless classics.
        </p>
      </div>

      <div className="flex justify-center my-4">
        <AddNewWatch />
      </div>

      {/* Loading / Error Messages */}
      {loading && (
        <p className="text-center text-blue-500 mb-4">Loading watches...</p>
      )}
      {error && <p className="text-center text-red-500 mb-4">Error: {error}</p>}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!watches || watches.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            No watches added yet.
          </div>
        ) : (
          watches.map((watch) => (
            <div
              key={watch._id || watch.id || watch.model}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={watch.picture}
                alt={`${watch.brand} ${watch.model}`}
                className="w-full h-60 object-cover object-center rounded-lg shadow-md"
              />
              <h2 className="text-xl font-semibold">{watch.brand}</h2>
              <p className="text-gray-700 italic">{watch.model}</p>
              <p className="text-sm text-gray-600">{watch.description}</p>
              <p className="text-green-600 mt-2 font-bold">${watch.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
