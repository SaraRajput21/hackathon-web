"use client";
import Image from "next/image";
import Reviews from "@/components/Reviews";

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

interface CarDetailsProps {
  car: Car; // Updated to accept a single car object
  reviews: Review[];
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, reviews }) => {
  return (
    <div className="bg-white shadow-lg mt-32 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Info */}
        <div>
          <h1 className="text-2xl font-bold">{car.name}</h1>
          <p className="text-gray-600 mt-2">
            Experience luxury and performance with our premium selection of {car.type} cars.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600">
              <strong>Type:</strong> {car.type}
            </p>
            <p className="text-gray-600">
              <strong>Fuel:</strong> {car.fuel}
            </p>
            <p className="text-gray-600">
              <strong>Transmission:</strong> {car.transmission}
            </p>
            <p className="text-gray-600">
              <strong>Seats:</strong> {car.seats}
            </p>
          </div>
        </div>

        {/* Car Image */}
        <div>
          <Image
            src={car.image}
            alt={car.name}
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews reviews={reviews} />
    </div>
  );
};

export default CarDetails;
