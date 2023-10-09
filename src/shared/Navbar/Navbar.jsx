
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

// AOS import 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Navbar = () => {

  const { user, logOutUser } = useContext(AuthContext)

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log('user logout successfully.');
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/registration">Registration</NavLink></li>
  </>

  const privateLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/registration">Registration</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/venues">Venues</NavLink></li>

  </>

  return (
    <div className=' bg-black bg-opacity-90' >
      <div className="navbar font-bold text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost text-white font-bold lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu menu-sm  dropdown-content mt-3 z-[1] md:p-2 shadow rounded-box w-32 md:w-52 bg-red-600">
              {user ? privateLinks : navLinks}
            </ul>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <a className="btn btn-ghost normal-case text-white md:text-2xl font-bold">𝓔𝓿𝓮𝓷𝓽 <span className='text-red-600'>𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:px-1">
            {user ? privateLinks : navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-3">

          {
            user && 
            <div className='flex gap-2 items-center'>
            <div className='w-7 h-6 md:w-10 md:h-10 rounded-full'>
            <img className='w-full h-full rounded-full' src={user.photoURL} alt="" />
            </div>
            <h1 className='text-xs'>{user.displayName}</h1>
          </div>
            
          }

          {
            user ? <button onClick={handleLogOut} className="btn bg-gradient-to-r from-red-600 to-slate-900 font-bold text-white">LogOut</button> :
              <Link to="/login"> <button className="btn bg-gradient-to-r from-red-600 to-slate-900 font-bold text-white">Login</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {

};

export default Navbar;