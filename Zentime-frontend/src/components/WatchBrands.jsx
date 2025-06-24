import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const brands = [
  { src: "Rolex.png", alt: "Rolex" },
  { src: "omega.jpg", alt: "Omega" },
  { src: "tagheuer.png", alt: "Tag Heuer" },
  { src: "cartier.png", alt: "Cartier" },
  { src: "Hublot.png", alt: "Hublot" },
  { src: "IWC.jpg", alt: "IWC" },
  { src: "Panerai.png", alt: "Panerai" },
  { src: "Longines.png", alt: "Longines" },
  { src: "Casio.png", alt: "Casio" },
  { src: "Breitling.png", alt: "Breitling" },
  { src: "Zenith.png", alt: "Zenith" },
  { src: "tudor.jpg", alt: "Tudor" },
];

export default function WatchBrands() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandsPerSlide = 6;
  const totalSlides = Math.ceil(brands.length / brandsPerSlide);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Watch Brands</h1>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, page) => (
            <div
              key={page}
              className="w-120 md:w-288 grid grid-cols-2 md:grid-cols-3 gap-4 px-2 shrink-0"
            >
              {brands
                .slice(page * brandsPerSlide, (page + 1) * brandsPerSlide)
                .map((brand, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/brand/${brand.alt}`)}
                    className="cursor-pointer bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-36 sm:h-44 hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}