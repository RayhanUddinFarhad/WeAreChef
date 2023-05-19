import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {


    const { createAccount } = useContext(AuthContext)
    const [error, setError] = useState("")
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

        if (password < 6) {

            setError('Password must be at least 6 characters')
            return;
        }






        if (email && password) {


            createAccount(email, password)
                .then((res) => {


                    const created = res.user


                    updateProfile(created, {

                        displayName: name, photoURL: photoURL

                    })

                    navigate(from, { replace: true });




                })
                .catch(err => {

                    console.log(err)
                    setError(`error: ${err.message}`)
                });



        }

        else {

            setError('Please provide email and password')


        }





    }



    return (
        <div>

<div className="hero min-h-screen bg-gray-100">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">If you don't have an account, please create one now!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white rounded-lg overflow-hidden">
      <p className="text-red-500">{error}</p>
      <Form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            name="UserName"
            type="text"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="photoURL" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            id="photoURL"
            name="photoURL"
            type="text"
            placeholder="URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn-main">Create an account</button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/logIn" className="text-green-600 font-bold btn-link">
            Log In Now
          </Link>
        </p>
      </Form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Register;