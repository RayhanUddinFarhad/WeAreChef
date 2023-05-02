import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'


const RecipeCard = ({ data }) => {

    console.log (data)
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
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeCard;