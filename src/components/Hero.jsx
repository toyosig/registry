import React from 'react';
import city from '../asset/city.jpg'
const Hero = () => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-800 sm:text-5xl">
              Welcome to Land Registry
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              The Land Registry is a very sensitive part of the Bureau that is saddled with the responsibility of keeping an up-to-date record of all land transactions in the State. 

            </p>
            <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Get Started
            </button>
          </div>
          <div className="lg:col-span-1 relative">
            <img
              src={city} // Replace with your image URL
              alt="Land registry"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-blue-800 opacity-25 rounded-md"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-full border-4 border-dashed border-gray-200"></div>
            <div className="absolute -bottom-20 -left-10 w-32 h-32 bg-white rounded-full border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
