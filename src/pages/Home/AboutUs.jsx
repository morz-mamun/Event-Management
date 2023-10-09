import aboutUs from "../../assets/aboutUs.jpg"
import { FaLongArrowAltRight } from 'react-icons/fa';

// AOS import 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutUs = () => {
    return (

        <div className="max-w-7xl mx-auto my-10 border-b-2 pb-20 border-black px-2">
            <h1 className='text-5xl font-bold text-center mb-10' data-aos="fade-down">About <span className="text-red-600">Us</span></h1>
            <div className="card card-compact max-w-7xl bg-slate-300 py-2 px-2 shadow-xl md:flex-row gap-5" data-aos="zoom-in-up">
                <figure className="flex-1" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" ><img className="rounded-lg" src={aboutUs} alt="Shoes" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title border-b-2 border-red-600 w-fit font-bold pb-2"> Crafting Memorable Moments Together.</h2>
                    <p className="text-lg">Welcome to  𝓔𝓿𝓮𝓷𝓽 <span className='text-red-600'>𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮</span>, your trusted partner in creating unforgettable social events. Our passion is to transform your dreams into reality, one event at a time. With a dedicated team of experienced professionals, we bring creativity, precision, and a personal touch to every occasion. Discover our story, mission, and commitment to making your celebrations truly exceptional.</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-gradient-to-r from-red-600 to-slate-900 text-white font-bold">Contact Us <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;