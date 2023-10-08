
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const allService = useLoaderData()
    
    return (
        <div className='max-w-7xl mx-auto border-b-2 pb-20 border-black'>
            <div className='my-10 space-y-5'>
            <h1 className='text-5xl font-bold text-center'>Our <span className='text-red-600'>Services</span> </h1>
            <p className='font-lg'>At 𝓔𝓿𝓮𝓷𝓽 <span className='text-red-600'>𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span> , we offer a comprehensive range of services to turn your social events into extraordinary experiences. Our dedicated team is here to take care of every detail, ensuring your special occasion is stress-free and unforgettable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20 px-2'>
                {
                    allService.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;