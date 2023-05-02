import React from 'react';
import Lottie from "lottie-react";
import loader from "../../assets/loading-spinner.json";


const SpinnerLottie = () => {
    return (
        <div>

<Lottie className='w-96 mx-auto' animationData={loader} />;
            
        </div>
    );
};

export default SpinnerLottie;