"use client";

import React, { useState } from "react";
import CarDetails from "@/components/CarDetails";


// Defining the types for Car and Review objects
interface Car {
  name: string;
  type: string;
  price: string;
  fuel: string;
  transmission: string;
  seats: string;
  image: string;
}

interface Review {
  reviewer: string;
  reviewText: string;
  rating: number;
  date: string;
}


const cars: Car[] = [
  // Your car data here
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      image: "/car1.png",
    },
    {
      name: "Nissan GT - R",
      type: "Luxury",
      price: "$150.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/car2.png",
    },
    {
      name: "Maverick",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car2.png",
    },
    {
      name: "Rolls - Royce",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car1.png",
    },
    {
      name: "v8",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car2.png",
    },
    {
      name: "Nitro",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car8.png",
    },
    {
      name: "Lamborghini",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car9.png",
    },
    {
      name: "Blaze",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car (3).png",
    },
    {
      name: "Vortex",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car (4).png",
    },
    {
      name: "Cobra",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car (5).png",
    },
    {
      name: "Rolls - Royce",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car (6).png",
    },
    {
      name: "Falcon",
      type: "Luxury",
      price: "$100.00",
      fuel: "80L",
      transmission: "Automatic",
      seats: "2 People",
      image: "/Car (7).png",
    },
  ];

const reviews: Review[] = [
  {
    reviewer: "John Doe",
    reviewText: "Amazing car, had a great experience!",
    rating: 5,
    date: "2024-12-09",
  },
  // Add more reviews here...
];

const CarGridWithDetails: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleRentNow = () => {
    window.location.href = "/PaymentPage"; // Update with your actual route
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {!selectedCar ? (
        <div>
          <h1 className="text-3xl font-semibold mt-10 text-gray-500 mb-8">Popular Cars</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-800">{car.name}</h2>
                <p className="text-sm text-gray-500">{car.type}</p>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-contain my-4 cursor-pointer"
                  onClick={() => setSelectedCar(car)}
                />
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-800">
                    {car.price}
                    <span className="text-sm font-normal text-gray-500"> / day</span>
                  </p>
                  <button
                    onClick={handleRentNow}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <CarDetails car ={selectedCar} reviews={reviews} />
          <div className="mt-6">
            <button
              onClick={() => setSelectedCar(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Back to Cars
            </button>
            <button
              onClick={handleRentNow}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Rent Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarGridWithDetails;

















