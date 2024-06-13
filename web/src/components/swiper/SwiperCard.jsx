import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import laptop from '../../assets/laptop.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './style.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function SwiperCard() {
  return (
    <>
      <Swiper 
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper pb-10  "
      >
        <SwiperSlide className='max-w-full bg-gray-600 '> 
            
             <div className="max-w-sm mx-4  bg-white shadow-xl  overflow-hidden">
    
          <div className="relative h-64 w-full">
            <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
            <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
          </div>

   
          <div className="px-6 py-4">
            <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        
          <div className="px-12 py-4 text-right"> 
            <div className="rating rating-xs mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>

      
          <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
            <div className="avatar mr-3">
              <div className="w-10 ml-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div> 
        
        <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
          {/* Image */}
          <div className="relative h-64 w-full">
            <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
            <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
          </div>

          {/* Text */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Rating */}
          <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
            <div className="rating rating-xs mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>

          {/* Avatar and Title */}
          <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
            <div className="avatar mr-3">
              <div className="w-10 ml-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>  
        <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
          {/* Image */}
          <div className="relative h-64 w-full">
            <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
            <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
          </div>

          {/* Text */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Rating */}
          <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
            <div className="rating rating-xs mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>

          {/* Avatar and Title */}
          <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
            <div className="avatar mr-3">
              <div className="w-10 ml-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>         
         </SwiperSlide>
         <SwiperSlide  className='bg-gray-600'> 
            
            <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div> 
       
       <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div>  
       <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div>         
        </SwiperSlide>
        <SwiperSlide className='bg-gray-600'> 
            
            <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div> 
       
       <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div>  
       <div className="max-w-sm mx-4 bg-white shadow-xl  overflow-hidden">
         {/* Image */}
         <div className="relative h-64 w-full">
           <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
           <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4 ">$10</div>
         </div>

         {/* Text */}
         <div className="px-6 py-4">
           <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
           <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>

         {/* Rating */}
         <div className="px-12 py-4 text-right"> {/* Aligning rating to the right */}
           <div className="rating rating-xs mb-5">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
         </div>

         {/* Avatar and Title */}
         <div className="bg-gradient-to-r from-cyan-800 to-blue-500 py-4 flex items-center justify-start">
           <div className="avatar mr-3">
             <div className="w-10 ml-10 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
         </div>
       </div>         
        </SwiperSlide>
      </Swiper>
    </>
  );
}
