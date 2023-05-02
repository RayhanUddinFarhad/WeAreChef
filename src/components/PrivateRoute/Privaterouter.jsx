import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import SpinnerLottie from '../Animation/SpinnerLottie';

const Privaterouter = ({children}) => {

    const {user, loading} = useContext (AuthContext)
    const location = useLocation()

    console.log (location)

    if (loading) {

        return <SpinnerLottie></SpinnerLottie>
    }


    if (user) {

        return children;
    }
    else {

        return <Navigate to={`/logIn`} state={{ from: location }} replace></Navigate>
    }


    
   
};

export default Privaterouter;