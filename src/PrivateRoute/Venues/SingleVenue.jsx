
import PropTypes from 'prop-types';
import { FaLongArrowAltRight } from 'react-icons/fa';

const SingleVenue = ({venue}) => {

    const {venue_name, img, location, description} = venue
    return (
        <div className='md:my-10'>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in-up">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                     <span className='text-red-600'> Venue Name: </span> {venue_name}</h2>
                    
                    <p> <span className='text-red-600 font-bold'> Location: </span> {location}</p>
                    <h2><span className='text-red-600 font-bold'>Description: </span>{description}</h2>
                    <div className="card-actions">
                        <button className="btn bg-gradient-to-r from-red-600 to-slate-900  font-bold text-white">Choose Your
                        <FaLongArrowAltRight></FaLongArrowAltRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleVenue.propTypes = {

};

export default SingleVenue;