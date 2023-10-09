
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetail = () => {
    const allService = useLoaderData()
    const { id } = useParams()


    const service = allService.find(item => item.id === id)

    const { name, image, price, short_description, full_description  } = service

    return (
        
<div className="hero bg-base-200 my-5 md:mb-32">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-md md:max-w-3xl rounded-lg shadow-2xl" />
    <div className='space-y-2'>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6"> {short_description} <br /> {full_description}
        </p>
        <p className='text-red-600 font-bold text-xl'>Price: <span className='text-black'> {price}</span></p>
      <button className="btn bg-gradient-to-r from-red-700 to-red-300">Book Now</button>
    </div>
  </div>
</div>
            


    );
};

ShowDetail.propTypes = {

};

export default ShowDetail;