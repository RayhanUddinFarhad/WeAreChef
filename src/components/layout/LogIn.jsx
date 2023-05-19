import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {


    const { googleLogIn, githubLogin, logIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')




// Log in with email and password

    const handleLogIn = (e) => {

        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        logIn(email, password)
            .then((res) => {

                const user = res.user;

                navigate(from, { replace: true });


            })
            .catch((err) => {


                console.log(err);
                setError(`error ${err.message}`)
            })



    }


    //logIn with Google account

    const handleGoogleLogin = () => {


        googleLogIn()
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(err => {

                console.log(err);
            })
    }

    //LogIn with Github account

    const handleGithubLogin = () => {


        githubLogin()
            .then((result) => {

                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(err => {

                console.log(err)
            })
    }





    return (
        <div className=''>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Login Now!</h1>
      <p className="text-center text-gray-600 mb-6">
        To Enjoy All Our Features, Please Log In Now
      </p>
      <form onSubmit={handleLogIn}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-800">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          <a href="#" className="text-xs text-indigo-600 mt-1 block">Forgot password?</a>
        </div>
        <div className="flex justify-center">
          <button className="btn-main" type="submit">
            Login
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-600 font-bold">
          Create an account
        </Link>
      </p>
      <div className="mt-6">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 mb-2 hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle className="mr-2" />
          Sign In With Google Account
        </button>
        <button
          onClick={handleGithubLogin}
          className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-200"
        >
          <FaGithub className="mr-2" />
          Sign In With Github Account
        </button>
      </div>
    </div>
  </div>
</div>

   </div>
    );
};

export default LogIn;