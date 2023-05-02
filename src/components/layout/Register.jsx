import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {


    const {createAccount} = useContext (AuthContext)
    const [error, setError] = useState ("")
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleRegister = (e) => { 

        e.preventDefault()

        const form = e.target;

        const name = form.UserName.value;

        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        if (password <6) {

            setError ('Password must be at least 6 characters')
            return;
        }






      if (email && password) {


        createAccount (email, password)
        .then ((res) => { 


            const created = res.user


            updateProfile(created, {

                displayName : name, photoURL : photoURL
                
            })

            navigate(from, { replace: true });




        })
        .catch (err => { 

            console.log (err)
            setError (`error: ${err.message}`)
        });
        
       
      
      }

      else {

        setError ('Please provide email and password')


      }

        



    }



    return (
        <div>

<div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className='text-red-500'>{error}</p>
                        <Form onSubmit={handleRegister} className="card-body">

                            



                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  name= 'UserName' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                                
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="URL" className="input input-bordered" />
                            </div>

                            
                            <div className="form-control mt-6">
                                <button className="btn-main">Create an account</button>
                            </div>

                            <p>Already have an account? <Link className='text-green-600 font-bold btn-link' to = "/logIn">Log In Now</Link></p>
                        </Form>
                    </div>
                </div>
            </div>                 
        </div>
    );
};

export default Register;