import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProviders';
import { GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {


    const { googleLogIn, githubLogin, logIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";




    const handleLogIn = (e) => {

        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log (email, password)

        logIn (email, password)
        .then ( (res) => { 

            const user = res.user;

            navigate(from, { replace: true });

            
        })
        .catch ( (err) => {


            console.log (err);
         })



    }

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
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn-main">Login</button>
                            </div>

                            <p>Don't have an account? <Link className='text-green-600 font-bold btn-link' to="/register">Create an account</Link></p>

                            <div>

                                <button onClick={handleGoogleLogin} className='flex items-center border p-2 rounded-lg my-2'>
                                    <FcGoogle className='mr-2'></FcGoogle>
                                    Sign In With Google Account
                                </button>

                                <button onClick={handleGithubLogin} className='flex items-center border p-2 rounded-lg'>

                                    <FaGithub className='mr-2'></FaGithub>

                                    Sign In With Github Account
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>        </div>
    );
};

export default LogIn;