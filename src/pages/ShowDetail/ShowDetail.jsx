
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetail = () => {
    const allService = useLoaderData()
    const { id } = useParams()


    const service = allService.find(item => item.id === id)

    const { name, image, price, short_description } = service
    return (
        <div className='max-w-7xl mx-auto'>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>





            {/* <h1>Show Details</h1>
            <div className='flex gap-5'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <h1>{price}</h1>
                    <p>{short_description}</p>
                </div>
            </div> */}

        </div>
    );
};

ShowDetail.propTypes = {

};

export default ShowDetail;