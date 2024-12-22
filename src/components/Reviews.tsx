import React from "react";
interface Review {
    reviewer: string;
    reviewText: string;
    rating: number;
    date: string;
  }
  
  interface ReviewsProps {
    reviews: Review[];
  }
  
  const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-lg font-bold">Reviews</h2>
        <p className="text-gray-600">({reviews.length})</p>
        <div className="mt-4 space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{review.reviewer}</h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-sm mt-2">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Reviews;
  