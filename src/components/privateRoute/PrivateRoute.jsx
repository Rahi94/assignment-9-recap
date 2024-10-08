import React, { useContext } from 'react';
import { AuthContext } from '../firebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // console.log(location.pathname)
    const { user, loading } = useContext(AuthContext)

    // if (loading) {
    //     return <span className="loading loading-spinner loading-lg text-success"></span>
    // }

    if (user) {
        return children;
    }
   
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;