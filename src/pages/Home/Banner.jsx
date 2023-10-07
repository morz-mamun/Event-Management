
import PropTypes from 'prop-types';

import banner6 from "../../assets/banner6.avif"
import { FaHandPointRight } from 'react-icons/fa';



const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner6})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className=" text-left text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Elevate Your Social Life with [MorZ] <br />
      Making Memories, One Event at a Time 
      </h1>
      <p className="mb-5">Elevate your social circle with our handpicked events designed to ignite your passions, expand your horizons, and elevate your social life.</p>
      <button className="btn bg-gradient-to-r from-red-600 to-red-300 font-bold text-white">Here You Goo <span><FaHandPointRight></FaHandPointRight></span> </button>
    </div>
  </div>
</div>

        // <div className='w-full min-h-screen' style={{
        //     backgroundImage: `url(${banner6})`,
        //     backgroundRepeat: "no-repeat",
        //     objectFit: "cover"
        // }}>
           
        // </div>
    );
};

Banner.propTypes = {

};

export default Banner;