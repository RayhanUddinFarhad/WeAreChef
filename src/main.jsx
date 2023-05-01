import React from 'react'
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

        path : "/logIn",
        element : <LogIn></LogIn>
      },

      {

        path : "/register",
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
