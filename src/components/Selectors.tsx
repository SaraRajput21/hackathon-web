import React from 'react';
import { BsFillStoplightsFill } from "react-icons/bs";
import { TbArrowsUpDown } from "react-icons/tb";
import Wrapper from "@/components/Wrapper";

const Selectors = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center rounded-sm space-x-6  px-10">
        {/* First Div */}
        <div className="w-[600px] h-[120px]">
          <div className="p-7 bg-gray-100 rounded-lg shadow relative">
            {/* Icon */}
            <BsFillStoplightsFill className="absolute left-3 mt-4 ml-5 -translate-y-1/2 text-blue-500 text-xl" />
            {/* Heading */}
            <h3 className="text-2xl ml-8 font-medium mb-6">Pick-Up</h3>
            {/* Selection Divs */}
            <div className="flex flex-wrap gap-4">
              {/* Location Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Location</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Location</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              {/* Date Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Time Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Arrow Div */}
        <div className="bg-blue-500 justify-center text-center w-[60px] rounded-xl h-[60px] flex items-center">
          <TbArrowsUpDown className="text-white text-2xl" />
        </div>

        {/* Second Div */}
        <div className="w-[600px] h-[120px]">
          <div className="p-7 bg-gray-100 rounded-lg shadow relative">
            {/* Icon */}
            <BsFillStoplightsFill className="absolute left-3 mt-4 ml-5 -translate-y-1/2 text-blue-500 text-xl" />
            {/* Heading */}
            <h3 className="text-2xl ml-8 font-medium mb-6">Drop-Off</h3>
            {/* Selection Divs */}
            <div className="flex flex-wrap gap-4">
              {/* Location Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Location</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Location</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              {/* Date Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Time Selection */}
              <div className="flex-1">
                <label className="block text-gray-800 font-medium mb-2">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Selectors;
