import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();


export const AuthContext = createContext(null)







const AuthProviders = ({children}) => {


    const [user, setUser] = useState("")

    const googleLogIn = () => {


        return signInWithPopup (auth, provider)
    }


    const githubLogin = () => {


        return signInWithPopup (auth, gitHubprovider)



     }


     const createAccount = (email, password) => { 


        return createUserWithEmailAndPassword (auth, email, password)
     }


     const logIn = (email, password) => { 


        return signInWithEmailAndPassword (auth, email, password)
     }

     const logOut = () => { 


        return signOut (auth)
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

        googleLogIn,
        githubLogin,
        createAccount,
        logIn,
        logOut
    }




    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;