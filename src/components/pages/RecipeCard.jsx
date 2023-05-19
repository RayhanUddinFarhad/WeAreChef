import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import '@smastrom/react-rating/style.css'
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const RecipeCard = ({ data }) => {



    const [handleClick, sethandleClick] = useState(false)



    console.log(data)






    return (
        <div>

            <div className="card  bg-base-100 my-5 shadow-xl">


                <figure><LazyLoadImage effect='black-and-white' className='w-96' src={data.recipePicture} /></figure>
                <div className="card-body space-y-5">
                    <h2 className="text-4xl font-extrabold text-center">
                        {data.recipeName}




                    </h2>

                    <p className='text-left text-3xl font-bold text-green-600 my-10'>Ingredients :</p>

                    <div>

                        {

                            data.ingredients && data.ingredients.map((ing) => <p className=" bg-orange-400 lg:w-96 text-white py-5 font-semibold my-2   rounded-lg ">{ing}</p>
                            )


                        }
                    </div>
                    <p> <span className='font-bold text-2xl lg:px-10 '>Cooking Method: <br /></span>   {data.cookingMethod}</p>
                    <div className="card-actions justify-end">
                        <p className='flex items-center'>

                            <span className='text-lg font-bold mr-5'>{data.rating}</span>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={data.rating}
                                readOnly
                            />
                        </p>




                        <button onClick={() => sethandleClick(true)} className={handleClick ? 'btn-disabled flex items-center py-2 px-6 rounded-xl ' : 'btn-main flex items-center'}> <FaHeart className='mr-3' ></FaHeart>
                            Favourite</button>



                        <div>




                        </div>
                    </div>
                </div>
            </div>

            {

                handleClick && toast.success(`Your favourite recipe ${data.recipeName} has been added`)
            }

        </div>
    );
};

export default RecipeCard;