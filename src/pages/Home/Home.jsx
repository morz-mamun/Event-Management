
import PropTypes from 'prop-types';
import Banner from './Banner';
import Services from './Services/Services';
import Footer from '../../shared/Footer/Footer';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Services></Services>
                <AboutUs></AboutUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;