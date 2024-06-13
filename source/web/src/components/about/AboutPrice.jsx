import React from 'react';

export default function AboutPrice() {
  return (
    <div className="bg-gray-600">
      <div>
        <div className='flex justify-center py-12 pt-24 items-center'>
          <div className='text-center'>
            <h5 className="text-md font-mono font-bold text-cyan-400 mb-4">ONLY THE BEST</h5>
            <h4 className="text-4xl text-white">
            Princing Table
            </h4>
          </div>
        </div>
  
  
        <div className="flex pb-32 justify-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 ...  w-96 bg-neutral text-neutral-content mr-4">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl text-white">Free!</h2>
              <p className='text-white'>We are using cookies for no reason.</p>
              <div className="card-actions justify-center">
              <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Purchase
          </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-yellow-700 ...  w-96 bg-neutral text-neutral-content mr-4">

            <div className="card-body items-center text-center">
              <h2 className="card-title text-white text-2xl">50% OFF!</h2>
              <p className='text-white'>We are using cookies for no reason.</p>
              <div className="card-actions justify-center">
              <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Purchase
          </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-cyan-700 ...  w-96 bg-neutral text-neutral-content mr-4">

            <div className="card-body items-center text-center">
              <h2 className="card-title text-white text-2xl">70% OFF!</h2>
              <p className='text-white'>We are using cookies for no reason.</p>
              <div className="card-actions justify-center">
              <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Purchase
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
