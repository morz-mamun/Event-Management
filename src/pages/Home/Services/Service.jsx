
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {name, image, price, short_description, id} = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions ">
                   <Link to={`/showDetails/${id}`}> 
                   <button className="btn bg-gradient-to-r from-red-700 to-red-300  font-bold text-white">Show Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {

};

export default Service;