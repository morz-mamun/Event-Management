
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const allService = useLoaderData()
    
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold'>Our <span className='text-red-600'>Services</span> </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 px-2'>
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