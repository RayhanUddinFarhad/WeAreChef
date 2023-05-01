import React from 'react';
import banneChef from '../../assets/youg-beautiful-chef-with-smile.jpg'

const Banner = () => {
    return (
        <div className='lg:flex justify-around my-10 items-center '>

            <div>

                <h1 className='text-5xl font-bold'>Savor the Flavors: <br /> A Culinary Journey with <br /> <span>WeAre<span className='text-green-600'>Chef</span></span> </h1>

                <p className='text-xl my-5'>Where we explore diverse flavors, learn new techniques, <br /> and create memorable meals together. <br /> From savory to sweet, <br /> let's take our taste buds on an adventure and discover the joy of cooking</p>

               



            </div>

            <div>


            <img className='w-96' src= {banneChef} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;