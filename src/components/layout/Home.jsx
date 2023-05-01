import React from 'react';
import Banner from '../pages/Banner';
import Chefs from '../pages/Chefs';
import CustomerReview from '../pages/CustomerReview';
import WhyHire from '../pages/WhyHire';

const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Chefs></Chefs>
            <WhyHire></WhyHire>


            <CustomerReview></CustomerReview>

            
        </div>
    );
};

export default Home;