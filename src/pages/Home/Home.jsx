
import PropTypes from 'prop-types';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Services></Services>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;