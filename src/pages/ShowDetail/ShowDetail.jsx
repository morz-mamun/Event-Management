
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetail = () => {
    const allService = useLoaderData()
    const { id } = useParams()


    const service = allService.find(item => item.id === id)

    const { name, image, price, short_description } = service

    return (
        
<div className="hero bg-base-200 my-5 md:mb-32">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-md md:max-w-3xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
            


    );
};

ShowDetail.propTypes = {

};

export default ShowDetail;