import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import '@smastrom/react-rating/style.css'
import { FaHeart } from 'react-icons/fa';


const RecipeCard = ({ data }) => {



    const [handleClick, sethandleClick] = useState (false)



    console.log (data)

    // const handleClick = event => {
    //     event.currentTarget.disabled = true;
    //     console.log('button clicked');

    //     handleClick (true)
    //   };
    return (
        <div>

<div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-96' src= {data.recipePicture} alt="Shoes" /></figure>
  <div className="card-body space-y-5">
    <h2 className="text-4xl font-extrabold text-center">
      {data.recipeName}



      
    </h2>

    <p className='text-left text-3xl font-bold text-green-600 my-10'>Ingredients :</p>

  <div>

  {

data.ingredients && data.ingredients.map ( (ing) =>       <p className=" bg-orange-400 w-96 text-white py-5 font-semibold my-2   rounded-lg ">{ing}</p>
)


}
  </div>
    <p> <span className='font-bold text-2xl px-10 '>Cooking Method:</span>   {data.cookingMethod}</p>
    <div className="card-actions justify-end">
      <p className='flex items-center'>

        <span className='text-lg font-bold mr-5'>{data.rating}</span>
        <Rating
      style={{ maxWidth: 180 }}
      value={data.rating}
      readOnly
    />
      </p>

      <button onClick={ () =>  sethandleClick (true)}  className= {handleClick ? 'btn-disabled flex items-center' : 'btn-main flex items-center'}> <FaHeart className='mr-3' ></FaHeart>
        Favourite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeCard;