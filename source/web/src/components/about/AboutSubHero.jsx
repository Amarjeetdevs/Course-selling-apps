import React from 'react'

export default function AboutSubHero() {
  return (
    <div className='h-screen  bg-gradient-to-r from-pink-900 via-purple-700 to-indigo-600 ... lg:py-32 flex justify-center items-center px-32 bg-white'>
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-4xl text-black font-bold mb-8">Hello, We are Academica</h1>
        <p className="mb-4 text-white text-md">Donec molestie tincidunt tellus sit. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris. In molestie quis risus commodo gravida.</p>

        <p className="mb-4 mt-14 text-white text-md "> Donec molestiec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris. In molestie quis risus commodo gravida.</p>

        <button className="mt-10 bg-gradient-to-r  from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Read More</button>

      </div>
      <div className="w-full md:w-1/2 p-6">
        <img className="object-contain mx-auto" src="https://preview.colorlib.com/theme/academica/img/about.jpg" alt="Image" />
      </div>
    </div>
  )
}
