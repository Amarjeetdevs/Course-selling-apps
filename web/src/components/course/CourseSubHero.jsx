import React from 'react';
import laptop from '../../assets/laptop.jpg';

export default function CourseSubHero() {
  return (
<>
<div className="bg-gray-600 flex justify-center">
      <div>
        <div className='flex justify-center py-12 pt-24 items-center'>
          <div className='text-center'>
            <h5 className="text-md font-mono font-bold text-cyan-400 mb-4">ONLY THE BEST</h5>
            <h4 className="text-4xl text-white">Our Courses</h4>
          </div>
        </div>
        
        <div className="max-w-8xl mx-4 bg-white shadow-xl overflow-hidden rounded-xs">
          <div className="relative h-96 w-full">
            <img className="absolute h-full w-full object-cover" src={laptop} alt="Laptop" />
            <div className="absolute top-10 left-0 bg-blue-500 text-white py-2 px-4 rounded-tr-md mt-4">$10</div>
            <div className="absolute top-10 right-0 bg-yellow-500 text-white py-2 px-4  mt-4">FEATURED</div>
          </div>

          <div className="px-10 py-6">
            <div className="font-bold text-2xl my-5">Lorem ipsum dolor sit amet</div>
            <p className="text-gray-700 text-lg">Lorem ipsum lorem20 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="px-10 py-4 text-right"> 
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
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div> 

        <div className='max-w-full flex mt-20 bg-gray-600 '> 
            
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
        </div>
      
        <div className='max-w-full flex mt-20 bg-gray-600 '> 
            
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
        </div>

        <div className="bg-gray-600 flex py-24 max-w-6xl justify-center">
   
        <div className='flex max-w-4xl'>
      <div className="relative max-h-6xl h-96 w-96">
        <img className="absolute inset-0 w-full h-full object-cover" src='https://th.bing.com/th/id/OIP.GZsDNFFni4eFjArSQpNyygHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="Laptop" />
        <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tr-md mt-4">$10</div>
      </div>
      <div className="max-w-md bg-white shadow-xl overflow-hidden h-96">
        {/* Text */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl my-5">Lorem, ipsum dolor.</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus magni sequi maiores, eligendi voluptatum doloremque veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam! Lorem ipsum dolor sit, amet  consectetur adipiscing </p>
        </div>

        {/* Rating */}
        <div className="px-12 py-4 text-right">
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
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
            </div>
          </div>
          <h3 className="text-white">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>

    </div>
    
      </div>
  
  
    </div>
  <div className='bg-gray-600 flex justify-center items-center pb-32'>
  <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Load More</button>

  </div>
 </>
);
}
