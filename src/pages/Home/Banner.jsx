
import PropTypes from 'prop-types';

import banner6 from "../../assets/banner6.avif"
import { FaHandPointRight } from 'react-icons/fa';



const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner6})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-left text-neutral-content">
    <div className="text-white font-extrabold px-2" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
      <h1 className="mb-5 text-5xl font-bold">Elevate Your Social Life with <span className='text-red-600'>𝓔𝓿𝓮𝓷𝓽 𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span>. <br />
      Making Memories, One Event at a Time 
      </h1>
      <p className="mb-5 font-bold ">Elevate your social circle with our handpicked events designed to ignite your passions, expand your horizons, and elevate your social life.</p>
      <button className="btn bg-gradient-to-r from-red-600 to-slate-900 font-bold text-white">Here You Goo <span><FaHandPointRight></FaHandPointRight></span> </button>
    </div>
  </div>
</div>
    );
};

Banner.propTypes = {

};

export default Banner;