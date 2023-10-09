
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
// AOS import 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Services = () => {
    const allService = useLoaderData()

    return (
        <div className='max-w-7xl mx-auto border-b-2 pb-20 border-black px-2'>
            <div className='my-10 space-y-5'>
                <h1 className='text-5xl font-bold text-center' data-aos="fade-down">Our <span className='text-red-600'>Services</span> </h1>
                <p className='font-lg' 
                >At 𝓔𝓿𝓮𝓷𝓽 <span className='text-red-600'>𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span> , we offer a comprehensive range of services to turn your social events into extraordinary experiences. Our dedicated team is here to take care of every detail, ensuring your special occasion is stress-free and unforgettable. <br />
                We are dedicated to making your social event a resounding success. Contact us today to discuss how we can tailor our services to meet your specific needs and make your event truly exceptional.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20 px-2 ' >
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