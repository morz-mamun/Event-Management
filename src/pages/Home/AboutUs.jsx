import aboutUs from "../../assets/aboutUs.jpg"
import { FaLongArrowAltRight } from 'react-icons/fa';

const AboutUs = () => {
    return (

        <div className="max-w-7xl mx-auto my-10 border-b-2 pb-20 border-black ">
            <h1 className='text-5xl font-bold text-center mb-10'>About <span className="text-red-600">Us</span></h1>
            <div className="card card-compact max-w-7xl bg-base-100 shadow-xl flex-row gap-5">
                <figure className="flex-1" ><img src={aboutUs} alt="Shoes" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title border-b-2 border-red-600 w-fit font-bold"> Crafting Memorable Moments Together.</h2>
                    <p className="text-lg">Welcome to [Your Company Name], your trusted partner in creating unforgettable social events. Our passion is to transform your dreams into reality, one event at a time. With a dedicated team of experienced professionals, we bring creativity, precision, and a personal touch to every occasion. Discover our story, mission, and commitment to making your celebrations truly exceptional.</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-gradient-to-r from-red-600 to-slate-900 text-white font-bold">Contact Us <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;