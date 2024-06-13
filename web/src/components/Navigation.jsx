import React from 'react';

export default function Navigation() {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-800 to-blue-500 mt-10 mx-4 md:mx-32 border-yellow-500 border-b-2 flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-12">
        <div className="flex items-center md:order-1">
          <img src="https://preview.colorlib.com/theme/academica/img/logo.png" alt="Logo" className="h-8 w-auto mr-4" />
          <div className="md:ml-32">
            <a href="/" className="text-white text-lg">Home</a>
            <a href="/about-us" className="text-white text-lg ml-4">About us</a>
            <a href="/courses" className="text-white text-lg ml-4">Courses</a>
         
            <a href="/contact-us" className="text-white text-lg ml-4">Contact</a>
          </div>
        </div>
        <div className="md:order-2 mt-4 md:mt-0 lg:mr-5">
          <a href="/login " className="text-white text-lg">Login/Register</a>
        </div>
      </div>
    </div>
  );
}
