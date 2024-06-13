import React from 'react'

export default function ContactSubHero() {
  return (
    <div className='h-screen  bg-gradient-to-r from-pink-900 via-purple-700 to-indigo-600 ... lg:py-32 flex justify-center items-center px-32 bg-white'>
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-4xl text-black font-bold mb-8">Stay in touch</h1>
        <p className="mb-4 text-white text-md">Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus eleifend, et auctor lorem hendrerit. Proin vitae tortor nec risus tristique efficitur. Aliquam luctus est urna, id aliquam orci tempus sed. Aenean sit amet leo id enim dapibus eleifend.</p>

        <h2 className="text-xl text-white font-bold mb-8">ADDRESS:1481 Creekside Lane Avila Beach, CA 931</h2>
        <h2 className="text-xl text-white font-bold mb-8">PHONE:+53 345 7953 32453</h2>
        <h2 className="text-xl text-white font-bold mb-8">EMAIL:yourmail@gmail.com</h2>


        <button className="mt-10 bg-gradient-to-r  from-cyan-800 to-blue-500 p-3 px-8 text-white shadow-lg">Read More</button>

      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-cyan-900 to-blue-700">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Message" className="textarea textarea-bordered" required />
        </div>
        <div className="form-control flex justify-center items-center mt-6">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-400 ... rounded-sm px-12 py-2 text-white">Send</button>
        </div>
      </form>
    </div>
    </div>
  )
}
