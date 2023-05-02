import React from 'react';
import { FaCookie } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {

    const data = useLoaderData()
    return (
        <div>
            <div className='lg:flex justify-around my-10 items-center '>

                <div className='w-[50%]'>

                    <h1 className='text-5xl font-bold text-green-600'>{data.chefName} </h1>

                    <p className='text-xl my-5'>{data.description}</p>


                    <div className="badge badge-secondary">{data.yearsOfExperience} years of Experienced</div>


                    <div className='flex justify-around my-5'>

                        <p className='flex items-center '> <FaCookie className='text-yellow-600 mr-2'></FaCookie> Recipes : {data.numRecipes}</p>
                        <p className='flex items-center'> <FcLike className='mr-2' /> Likes: {data.likes}</p>
                    </div>





                </div>

                <div>


                    <img className='w-80' src={data.chefPicture} alt="" />
                </div>

            </div>

            <div>



                
            </div>




        </div>
    );
};

export default Recipe;