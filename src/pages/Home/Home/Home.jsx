import React from 'react';
import Bannar from '../../../component/bannar/Bannar';
import Howitworks from '../../../component/howItworks/Howitworks';
import OurService from '../../../component/our service/OurService';
import Brands from '../../../component/brands/Brands';
import Support from '../../../component/support/Support';
import CustomerSatisfaction from '../../../component/customer satisfaction/CustomerSatisfaction';
import CustomerReview from '../../../component/customer review/CustomerReview';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Howitworks></Howitworks>
           <OurService></OurService>
           <Brands></Brands>
           <Support></Support>
           <CustomerSatisfaction></CustomerSatisfaction>
           <CustomerReview></CustomerReview>
           
        </div>
    );
};

export default Home;