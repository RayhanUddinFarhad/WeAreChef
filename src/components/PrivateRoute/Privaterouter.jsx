import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Privaterouter = ({children}) => {

    const {user, loading} = useContext (AuthContext)
    const location = useLocation()

    console.log (location)

    if (loading) {

        return <progress className="progress w-56"></progress>
    }


    if (user) {

        return children;
    }
    else {

        return <Navigate to={`/logIn`} state={{ from: location }} replace></Navigate>
    }


    
   
};

export default Privaterouter;