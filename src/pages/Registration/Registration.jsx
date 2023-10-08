
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Registration = () => {

  const { createUser } = useContext(AuthContext)

  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const handleRegistration = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    

    setError('')

    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(<>
        <div className=" toast-bottom">
          <div className="alert bg-white">
            <span className='text-red-600 font-bold'>Password should have at least one [A-Z], [a-b], [0-9] and special character.</span>
          </div>
        </div>
      </>)
      return
    }

    // create user
    createUser(email, password)
      .then(() => {
        
      })
      .catch(err => {
        console.log(err.message);
      })
    e.target.reset()

    navigate('/login')
  }
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-slate-500 to-blue-200 ...">

        <div className="hero-content card w-full max-w-3xl shadow-2xl bg-gradient-to-r from-slate-300 to-blue-300 ... ">
          <h1 className='text-3xl font-bold'>Register <span className='text-red-600'>Now</span></h1>
          <p className='text-xl'>Already have an account?! please <Link to='/login'><span className=' text-red-600 underline font-bold'>Log in here.</span></Link></p>

        

          <form onSubmit={handleRegistration} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Email</span>
              </label>
              <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="text-xl font-bold">Password</span>
              </label>
              <input type={showPass ? 'text' : 'password'} name="password" placeholder="Type your password" className="input input-bordered" required />
              <span className='absolute bottom-0 right-0 top-14 text-3xl' onClick={() => setShowPass(!showPass)}>

                {
                  showPass ? <AiFillEyeInvisible></AiFillEyeInvisible> :  <AiFillEye></AiFillEye>
                }
              </span>

            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl">Log in</button>
            </div>
            <div className='from-control'>{error}</div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

Registration.propTypes = {

};

export default Registration;