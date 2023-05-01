import React from 'react';

const CustomerReview = () => {
    return (
        <div className='my-10'>

<h1 className='text-4xl font-semibold  border-green-600 text-center'>Customers <span className='text-green-600 font-bold'>Reviews</span>
            <hr className=' bg-green-600 mx-96 text-center my-2 h-1' />

            
            </h1>

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='h-96' src="https://i.ibb.co/KDnZ1SB/MYXJ-20220419103015094-save.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-3xl">Rayhan Uddin Farhad</h2>
    <p>"I recently used this website to find chef and I have to say, <br /> I particularly appreciated the chef profiles, <br /> which allowed me to learn more about the people behind the recipes. <br /> I found the search function to be very helpful and was able to quickly find what I was looking for. <br /> Overall, I'm very satisfied with the service I received and would definitely recommend this website to anyone looking for delicious recipes and cooking inspiration!"</p>
   
  </div>
</div>
            
        </div>
    );
};

export default CustomerReview;