
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
            </div>
           
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;