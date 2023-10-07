
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
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

    {/* <div className="text-lg flex items-center justify-center py-2 rounded-lg w-2/4 bg-gradient-to-r from-slate-500 to-blue-200 ... font-bold">
       <button>
       <p className='flex items-center gap-4'> <FcGoogle></FcGoogle> Log in with Google.</p>
       </button>
      </div> */}
    {/* <div className="text-lg flex items-center justify-center py-2 rounded-lg w-2/4 bg-gradient-to-r from-slate-500 to-blue-200 ... font-bold">
       <button>
       <p className='flex items-center gap-4'> <BsFacebook></BsFacebook> Log in with Facebook.</p>
       </button>
      </div> */}

      {/* <div className=''>
        <p className='border-2 border-red-600 shadow-lg  px-4 py-2 rounded-lg font-bold bg-gradient-to-r from-slate-300 to-blue-200 ...'>OR LOGIN WITH EMAIL.</p>
      </div> */}

    <form onSubmit={handleRegistration} className="card-body w-full">
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-bold">Email</span>
        </label>
        <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-bold">Password</span>
        </label>
        <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
        
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-gradient-to-r from-red-700 to-red-300 text-white font-bold text-xl">Log in</button>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

Registration.propTypes = {
    
};

export default Registration;