import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();


export const AuthContext = createContext(null)







const AuthProviders = ({children}) => {


    const [user, setUser] = useState("")
    const [loading, setLoading] = useState (true)

    const googleLogIn = () => {

        setLoading (true)


        return signInWithPopup (auth, provider)
        
    }


    const githubLogin = () => {

        setLoading (true)


        return signInWithPopup (auth, gitHubprovider)



     }


     const createAccount = (email, password) => { 
        setLoading (true)


        return createUserWithEmailAndPassword (auth, email, password)
     }


     const logIn = (email, password) => { 

        setLoading (true)


        return signInWithEmailAndPassword (auth, email, password)
     }

     const logOut = () => { 
        setLoading (true)


        return signOut (auth)
     }

    useEffect (() => { 



        const unsubscribe = onAuthStateChanged (auth, (currentuser) => {

            setUser (currentuser)
            setLoading  (false)
        })

        return () => {

            return unsubscribe ();
         }
    }, [])


    const authInfo = {

        user,

        googleLogIn,
        githubLogin,
        createAccount,
        logIn,
        logOut,
        loading
    }




    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;