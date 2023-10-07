
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateShowDetail = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateShowDetail.propTypes = {
    
};

export default PrivateShowDetail;