import React from 'react';
import laptop from '../assets/laptop.jpg';
import SwiperCard from './swiper/SwiperCard';

export default function TransSec() {
  return (
    <div className='bg-gradient-to-r from-cyan-900 to-blue-700'>
      <div className="relative h-screen flex items-center justify-center ">

        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${laptop})`, opacity: 0.3 }}></div>


        <div className="relative z-20 text-white text-center px-8 lg:px-56  py-8 lg:py-32">
          <h5 className="text-md   font-mono font-bold  mb-4">OUR STUDENTS</h5>
          <p className="text-4xl">Testimonials</p>
          <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-2 mt-24  px-6 text-2xl text-white shadow-lg">“</button>

          <h5 className="text-md  text-2xl font-mono mt-8 mb-8">It helped me so much</h5>

          <h5 className="text-md  text-xl font-mono  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum, neque enim ad aliquam possimus nemo temporibus? Quam sapiente fuga dolorem, qui, nisi maxime fugiat ad deleniti mollitia vel velit culpa quia amet.</h5>
    
          <div className="avatar mt-12">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
          <h5 className="text-md text-xl font-mono  mb-8">
            <span className="text-yellow-500"> Jane forest</span>, Student
          </h5>



        </div>
      </div>
    </div>
  );
}
