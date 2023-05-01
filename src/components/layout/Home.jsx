import React from 'react';
import Banner from '../pages/Banner';
import Chefs from '../pages/Chefs';
import CustomerReview from '../pages/CustomerReview';

const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Chefs></Chefs>

            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;