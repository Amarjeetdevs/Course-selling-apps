import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen'; 
export default function NewLatter() {

  const cld = new Cloudinary({ cloud: { cloudName: 'dooem026n' } });
  const imageUrl = cld.image('sample.jpg').toURL();
  return (
    <div className='flex flex-col items-center justify-center  bg-transparent py-24'>
      <h2 className='text-white text-4xl font-serif font-bold mb-4'>SUBSCRIBE NEWSLETTER</h2>
      <h4 className='text-gray-200 text-xl mb-4'>Subscribe to our newsletter and get the latest updates</h4>
      <div className="flex items-center">
  <input type="text" placeholder="abc@outmail.com" className="input input-bordered input-info bg-white w-full max-w-xs mr-0" />
  <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Subscribe</button>
</div>

    
    </div>
  );
}
