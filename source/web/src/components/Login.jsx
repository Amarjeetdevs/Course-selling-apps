import { Link } from "react-router-dom"
export default function Login() {
  
const handleLogin = () => {

}

  return (
        <>

<div className="hero min-h-screen bg-gray-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center  ml-14 lg:text-left">
      <img src="https://preview.colorlib.com/theme/academica/img/logo.png" alt="not found"/>
      <h1 className="text-5xl text-white font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-cyan-900 to-blue-700">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input  input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input  input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control felx justify-center items-center mt-6">
         <Link to={'/'} >
         <button  className="bg-gradient-to-r from-cyan-500 to-blue-400 ... rounded-sm px-12 py-2 text-white">Login</button>
         
         </Link>
        
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
