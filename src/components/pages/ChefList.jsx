import React, { useState } from 'react';
import { FaCookie } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const ChefList = ({ data }) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };



  return (
    <div>
      <div className="card max-w-max lg:w-96 h-full bg-base-100 shadow-xl">

  <LazyLoadImage  effect='blur' src= {data.chefPicture} alt="your-image-alt-text"
></LazyLoadImage>

        <div className="card-body">
          <h2 className="card-title">{data.chefName}</h2>
          <div className="badge badge-secondary">{data.yearsOfExperience} years of Experienced</div>


          <div className='flex'>

            <p className='flex items-center '> <FaCookie className='text-yellow-600 mr-2'></FaCookie> Recipes : {data.numRecipes}</p>
            <p className='flex items-center'> <FcLike className='mr-2' /> Likes: {data.likes}</p>
          </div>
          <div className="card-actions justify-end my-2">

            <Link to = {`recipes/${data.id}`}>      <button className="btn-main">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChefList;