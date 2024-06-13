import React from 'react';
import laptop from '../assets/laptop.jpg';

export default function Card() {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64 w-full">
        <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
      </div>

      {/* Text */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title Here</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}
