"use client"
import { useState } from "react";

const FullSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Open Button */}
      <button
        className="fixed top-5 left-9 z-50 p-2 h-9 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* Sidebar Content */}
        <div className="p-6 mt-10">
          {/* Sidebar Header */}
          <h2 className="text-xl font-semibold mb-6">Filters</h2>

          {/* Filter: Type */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Type</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" id="sport" className="mr-2" />
                <label htmlFor="sport" className="text-gray-800">Sport (10)</label>
              </li>
              <li>
                <input type="checkbox" id="suv" className="mr-2" />
                <label htmlFor="suv" className="text-gray-800">SUV (12)</label>
              </li>
              <li>
                <input type="checkbox" id="mpv" className="mr-2" />
                <label htmlFor="mpv" className="text-gray-800">MPV (16)</label>
              </li>
              <li>
                <input type="checkbox" id="sedan" className="mr-2" />
                <label htmlFor="sedan" className="text-gray-800">Sedan (20)</label>
              </li>
              <li>
                <input type="checkbox" id="coupe" className="mr-2" />
                <label htmlFor="coupe" className="text-gray-800">Coupe (14)</label>
              </li>
              <li>
                <input type="checkbox" id="hatchback" className="mr-2" />
                <label htmlFor="hatchback" className="text-gray-800">Hatchback (14)</label>
              </li>
            </ul>
          </div>

          {/* Filter: Capacity */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Capacity</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" id="2-person" className="mr-2" />
                <label htmlFor="2-person" className="text-gray-800">2 Person (10)</label>
              </li>
              <li>
                <input type="checkbox" id="4-person" className="mr-2" />
                <label htmlFor="4-person" className="text-gray-800">4 Person (14)</label>
              </li>
              <li>
                <input type="checkbox" id="6-person" className="mr-2" />
                <label htmlFor="6-person" className="text-gray-800">6 Person (12)</label>
              </li>
              <li>
                <input type="checkbox" id="8-or-more" className="mr-2" />
                <label htmlFor="8-or-more" className="text-gray-800">8 or More (16)</label>
              </li>
            </ul>
          </div>

          {/* Filter: Price */}
          <div>
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <div className="flex items-center space-x-4 text-blue-700">
              <input
                type="range"
                className="w-full text-blue-700"
                min="0"
                max="100"
                defaultValue="50"
              /> 
              
              <span className="text-gray-800">$100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSidebar;
