import React from 'react';

export default function IconTitle() {
  return (
    <div className='flex px-36 py-20 justify-center items-center bg-white'>
      <div className='grid grid-cols-4 gap-32 '>
        <div className='p-4 flex flex-col items-center justify-center'>
          <img
            src='https://preview.colorlib.com/theme/academica/img/icons/1.png'
            alt='Image'
            className='h-16 w-16 mb-2' // Reduced height and width
          />
          <h2 className=' text-black text-6xl font-bold mb-2'>2500</h2>
          <p className='text-xl text-center'>New Students</p>
        </div>
        <div className='p-4 flex flex-col items-center justify-center'>
          <img
            src='https://preview.colorlib.com/theme/academica/img/icons/2.png'
            alt='Image'
            className='h-16 w-16 mb-2' // Reduced height and width
          />
          <h2 className='text-black text-6xl font-bold mb-2'>14k</h2>
          <p className='text-xl text-center'>Grad Students</p>
        </div>
        <div className='p-4 flex flex-col items-center justify-center'>
          <img
            src='https://preview.colorlib.com/theme/academica/img/icons/3.png'
            alt='Image'
            className='h-16 w-16 mb-2' // Reduced height and width
          />
          <h2 className='text-black text-6xl font-bold mb-2 '>129</h2>
          <p className='text-xl text-center'>Qualified Teachers</p>
        </div>
        <div className='p-4 flex flex-col items-center justify-center'>
          <img
            src='https://preview.colorlib.com/theme/academica/img/icons/4.png'
            alt='Image'
            className='h-16 w-16 mb-2' // Reduced height and width
          />
          <h2 className='text-black text-6xl font-bold mb-2'>1490</h2>
          <p className='text-xl text-center'>Amazing Courses</p>
        </div>
      </div>
    </div>
  );
}
