import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import car1Img from '/public/car1.png';
import car2Img from '/public/car2.png';

const Poster = () => {
  return (
    <Wrapper>
      <div className="flex justify-center items-center p-4 rounded-sm space-x-6">
        {/* Left Div */}
        <div className="bg-[#54A6FF] text-white rounded-lg flex flex-col p-6 h-[360px] w-[640px]">
          <h1 className="font-semibold text-4xl mb-2">
            The Best Platform <br /> for Car Rental
          </h1>
          <p className="text-xl font-normal mt-5 text-gray-100">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <button className="bg-[#3563E9] text-white w-32 mt-7 px-4 py-2 rounded shadow hover:bg-gray-600">
            Rental Car
          </button>

          <Image
            src={car1Img}
            alt="Car Image"
            width={415} // Set explicit width
            height={119} // Set explicit height
            className="ml-28 mt-[-25px]"
          />
        </div>

        {/* Right Div */}
        <div className="bg-[#3563E9] text-white rounded-lg flex flex-col p-6 h-[360px] w-[640px]">
          <h1 className="font-semibold text-4xl mb-2">
            Easy way to rent a <br /> car at a low price
          </h1>
          <p className="text-xl font-normal mt-5 text-gray-100">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="bg-[#54A6FF] text-white w-32 mt-7 px-4 py-2 rounded shadow hover:bg-gray-600">
            Rental Car
          </button>

          <Image
            src={car2Img}
            alt="Cars Image"
            width={400} // Set explicit width
            height={110} // Set explicit height
            className="ml-40 mt-[-25px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Poster;
