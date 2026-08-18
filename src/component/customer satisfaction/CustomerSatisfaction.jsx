import React from 'react';

import merchant from '../../assets/merchant-bg.png'
import locationMerchant  from '../../assets/location-merchant.png'

const CustomerSatisfaction = () => {
    return (
        <div className='bg-secondary rounded-2xl'>
            <div>
                <img src={merchant} alt="merchant-bg" />
            </div>

            <div className='flex items-center justify-center p-20'>
                {/* left side */}
                <div className='space-y-8 w-[700px]'>
                    <h2 className='text-[40px] text-white font-extrabold'>Merchant and Customer Satisfaction is Our First Priority</h2>
                    <p className='text-[#DADADA]'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                
                {/* button */}
                <div className='flex gap-5'>
                    <button className='btn bg-primary rounded-2xl font-bold'>Become a Merchant</button>
                    <button className='btn bg-transparent rounded-2xl font-bold text-primary border-primary'>Earn with ZapShift Courier</button>
                </div>
                </div>
                {/* right side */}
                <div>
                        <img src={locationMerchant} alt="location merchant" />
                </div>
            </div>
        </div>
    );
};

export default CustomerSatisfaction;