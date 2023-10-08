
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

  const {user, logOutUser} = useContext(AuthContext)

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
        <li><NavLink to="/services" >Services</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        
    </>

    return (
       <div className=' bg-black bg-opacity-90' >
         <div className="navbar  font-bold text-white max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-white font-bold lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-red-600 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-white text-2xl font-bold">𝓔𝓿𝓮𝓷𝓽 <span className='text-red-600'>𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

    {
      user ? <button onClick={handleLogOut} className="btn bg-gradient-to-r from-red-600 to-slate-900 font-bold text-white">LogOut</button> : 
     <Link to="/login"> <button  className="btn bg-gradient-to-r from-red-600 to-slate-900 font-bold text-white">Login</button></Link>
    }
   
   
  
   
    
  </div>
</div>
       </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;