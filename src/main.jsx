import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './components/layout/LogIn.jsx';
import Register from './components/layout/Register.jsx';
import Home from './components/layout/Home.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import Recipe from './components/layout/Recipe.jsx';
import Privaterouter from './components/PrivateRoute/Privaterouter.jsx'
import ErrorPage from './components/layout/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [

      {
        path : "/",
        element : <Home></Home>

      },

      {
        path : "recipes/:id",
        element : <Privaterouter><Recipe></Recipe></Privaterouter>,
        
        loader : ({params}) => fetch (`https://chef-hunter-server-rayhanuddinfarhad.vercel.app/recipes/${params.id}`)


      },

      {

        path : "/logIn",
        element : <LogIn></LogIn>
      },

      {

        path : "/register",
        element : <Register></Register>
      }
    ]
  },

  {

    path : "*",
    element : <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
