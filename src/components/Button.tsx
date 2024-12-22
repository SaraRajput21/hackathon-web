import React from "react";

const Button = () => {
  return (
    <div className="relative mt-10">
      {/* Centered button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
          Show more cars
        </button>
      </div>
      {/* Positioned "120 Cars" */}
      <h3 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
        <span className="text-blue-500 font-bold">120</span> Cars
      </h3>
    </div>
  );
};

export default Button;
