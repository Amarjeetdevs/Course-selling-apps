import React from 'react';
import { Link } from 'react-router-dom';

export default function SubHero() {
    return (
        <div className=' bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-900 ... flex justify-center items-center px-32 py-12 bg-white'>
            <div className='grid mr-auto'>
                <div className=' w-96 mt-5 bg-yellow-500 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title text-white'>Learn Courses Online</h2>
                        <p className='text-white'>
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className='card-actions justify-end'>
                        <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-2   px-6 text-lg text-white shadow-lg">VIEW MORE</button>
                        </div>
                    </div>
                </div>

                <div className=' bg-gradient-to-r from-orange-400 to-yellow-500 p-2  w-96   mt-5 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title text-white'>Online Library Store</h2>
                        <p className='text-white'>
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className='card-actions justify-end'>
                        <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-2   px-6 text-lg text-white shadow-lg">VIEW MORE</button>
                        </div>
                    </div>
                </div>

                <div className=' w-96 bg-cyan-600 mt-5 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title text-white'>50% off on all selected courses</h2>
                        <p className='text-white'>
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className='card-actions justify-end'>
                     <Link  to='/list-all-course'    >
                     <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-2   px-6 text-lg text-white shadow-lg">VIEW MORE</button>
                     </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-12  ml-auto'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-start pl-8 text-black font-serif'>Welcome to Acedemia</h1>
                    <p className='text-lg pt-5 pb-32 pl-10 text-start font-sans text-white font-normal'>When she reached the first hills of the Italic Mountains,
                        she had a last view back on <br/> the skyline of her hometown Bookmarksgrove, the headline
                        of Alphabet Village and the subline of
                        her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
                        she continued her way.</p>
                </div>
            </div>

        
            
        </div>
    );
}
