import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center ms-3 font-bold'>
           <img src={logo} alt="zap logo" srcset="" />
           <h2 className='text-[32px] font-extrabold'>ZapShifts</h2>
        </div>
    );
};
export default Logo;