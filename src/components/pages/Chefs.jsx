import React, { useEffect, useState } from 'react';
import ChefList from './ChefList';
import SpinnerLottie from '../Animation/SpinnerLottie';

const Chefs = () => {
    const [chef, setChef] = useState  ([])

    const [loading, setLoading] = useState  (false)

    useEffect (() => {

        setLoading  (true)


        fetch (`https://chef-hunter-server-rayhanuddinfarhad.vercel.app/`)
        .then (res => res.json())
        .then (data => {setChef (data) 
        setLoading (false)       }
        )

    }, [])

    return (
        <div>
            <h1 className='text-4xl font-semibold  border-green-600 text-center'>Our <span className='text-green-600 font-bold'>Chefs</span>
            <hr className=' bg-green-600 mx-96 text-center my-2 h-1' />

            
            </h1>


            {

                loading && <><SpinnerLottie></SpinnerLottie></>
            }

            <div className='grid lg:grid-cols-3 gap-5'>

               {

                chef && chef.map (chef =>  <ChefList key={chef.id} data = {chef}></ChefList>) 
               }


            </div>
        </div>
    );
};

export default Chefs;