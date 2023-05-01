import React, { useState } from 'react';
import { FaCookie } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

const ChefList = ({data}) => {

    return (
        <div>
            <div className="card max-w-max lg:w-96 h-full bg-base-100 shadow-xl">
  <figure><img src={data.chefPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.chefName}</h2>
    <div className="badge badge-secondary">{data.yearsOfExperience} years of Experienced</div>


    <div className='flex'>

        <p className='flex items-center '> <FaCookie className='text-yellow-600 mr-2'></FaCookie> Recipes : {data.numRecipes}</p>
        <p className='flex items-center'> <FcLike className='mr-2'/> Likes: {data.likes}</p>
    </div>
    <div className="card-actions justify-end my-2">
      <button className="btn-main">View Recipes</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default ChefList;