
import PropTypes from 'prop-types';
import Banner from './Banner';
import Services from './Services/Services';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;