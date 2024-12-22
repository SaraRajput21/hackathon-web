// pages/payment.js
'use client';
import React, { useState } from "react";

const PaymentPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>

        <div className="space-y-6">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border rounded px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border rounded px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border rounded px-4 py-2 w-full col-span-2"
                />
                <input
                  type="text"
                  placeholder="Town / City"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Pick-Up</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <select className="border rounded px-4 py-2 w-full">
                      <option>Select your city</option>
                    </select>
                    <input
                      type="date"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="time"
                      className="border rounded px-4 py-2 w-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Drop-Off</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <select className="border rounded px-4 py-2 w-full">
                      <option>Select your city</option>
                    </select>
                    <input
                      type="date"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="time"
                      className="border rounded px-4 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Credit Card</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Expiration date (MM/YY)"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="border rounded px-4 py-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="border rounded px-4 py-2 bg-gray-100">
                    PayPal
                  </button>
                  <button className="border rounded px-4 py-2 bg-gray-100">
                    Bitcoin
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>I agree with sending marketing and newsletter emails.</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>I agree with terms and conditions and privacy policy.</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            ) : (
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Rent Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
