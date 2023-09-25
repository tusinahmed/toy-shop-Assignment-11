import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Privateroute = ({ children }) => {

    let location = useLocation();


    let { user, loader } = useContext(AuthContext)
    if (loader) {
        return <> <h1> loading</h1> </>
    }

    if (user && user.uid) {
        return children
    }
    { alert('you need login') }
    return <Navigate to='/signin' state={{ from: location }} replace>  </Navigate>
};

export default Privateroute;