
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
// AOS import 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Service = ({service}) => {

    const {name, image, price, short_description, id, full_description} = service
    return (
        <div className="card card-compact bg-slate-300 shadow-xl" data-aos="zoom-in-up">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-red-600 font-bold'>Price: <span className='text-black'>{price}</span> </p>
                <p>{short_description}</p>
                <div className="card-actions ">
                   <Link to={`/showDetails/${id}`}> 
                   <button className="btn bg-gradient-to-r from-red-600 to-slate-900  font-bold text-white">Show Details <FaLongArrowAltRight></FaLongArrowAltRight></button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {

};

export default Service;