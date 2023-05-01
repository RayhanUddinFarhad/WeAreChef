import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)







const AuthProviders = ({children}) => {


    const [user, setUser] = useState("")

    const googleLogIn = () => {


        return signInWithPopup (auth, provider)
    }

    useEffect (() => { 



        const unsubscribe = onAuthStateChanged (auth, (currentuser) => {

            setUser (currentuser)
        })

        return () => {

            return unsubscribe ();
         }
    }, [])


    const authInfo = {

        user,

        googleLogIn
    }




    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;