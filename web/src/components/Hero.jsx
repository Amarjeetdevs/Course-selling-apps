import React from 'react';
import mg from '../assets/frontwlp.jpg';

export default function Hero() {
  return (
    <div className="  min-h-screen relative">
      {/* <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${mg})` }}
        ></div> */}
      <div className="hero-overlay     z-10"></div>
      <div className="hero-content text-center text-neutral-content relative z-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-5 pt-32 text-white text-6xl  font-serif font-bold">
            Education is a Key to Success
          </h1>
          <p className="mb-5 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem!
          </p>
          <div className="py-4 flex items-center justify-start">
            <div className="avatar mb-2 mr-3">
              <div className="w-10 ml-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h5 className="text-md  text-white text-xl font-mono  mb-0">
              Jane forest,
            <span className="text-yellow-500">Senior Developer</span>
            </h5>
          </div>

          <button className="bg-gradient-to-r from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Get Started
          </button>

        </div>
      </div>
    </div>
  );
}
