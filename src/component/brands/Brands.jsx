import React from 'react';
import amazone from '../../assets/brands/amazon.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starpeople from '../../assets/brands/start_people.png'

const Brands = () => {
    return (
        <div className='py-15'>
            <div className='text-center'>
                <h2 className='text-[28px] font-extrabold text-secondary'>We've helped thousands of sales teams</h2>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10'>
                <img src={casio} alt="Casio" />
                  <img src={amazone} alt="amazone" />
                    <img src={moonstar} alt="moonstar" />
                      <img src={star} alt="star" />
                        <img src={starpeople} alt="start people" />
                          
            </div>
            <div className='border-2 border-dotted border-secondary mt-20'>

            </div>
        </div>
    );
};

export default Brands;