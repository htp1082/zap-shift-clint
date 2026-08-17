import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center justify-center font-bold'>
           <img src={logo} alt="" srcset="" />
           <h2>ZapShifts</h2>
        </div>
    );
};

export default Logo;