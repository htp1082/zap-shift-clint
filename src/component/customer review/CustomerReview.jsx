import React from 'react';
import locationMerchant from '../../assets/customer-top.png'

const CustomerReview = () => {
    return (
        <div className='p-10 space-y-5'>
            <div className='flex items-center justify-center'>
                <img src={locationMerchant} alt="Location merchant" />
            </div>
            <div className='text-center text-secondary'>
                <h2 className='font-extrabold text-[40px] '>What our customers are sayings</h2>
                <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
        </div>
    );
};

export default CustomerReview;