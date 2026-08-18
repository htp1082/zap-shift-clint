import React from "react";
import safe_delevery from "../../assets/safe-delivery.png";

const Support = () => {
  return (
    <div>
        {/* support card 01 */}
      <div className="flex items-center bg-white text-secondary rounded-2xl p-5 mt-3">
        <div className="w-[200px] border-dotted border-r-2 p-10">
          <img src={safe_delevery} alt="Safe Delevery" />
        </div>
        <div className="ml-10">
            <h2 className="text-[24px] font-extrabold ">Live Parcel Traking</h2>
            <p className="mt-5">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
          {/* support card 02 */}
       <div className="flex items-center bg-white text-secondary rounded-2xl p-5 mt-3">
        <div className="w-[200px] border-dotted border-r-2 p-10">
          <img src={safe_delevery} alt="Safe Delevery" />
        </div>
        <div className="ml-10">
            <h2 className="text-[24px] font-extrabold  ">100% Safe Delivery</h2>
            <p className="mt-5">We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
        </div>
      </div>
          {/* support card 03 */}
       <div className="flex items-center bg-white text-secondary rounded-2xl p-5 mt-3">
        <div className="w-[200px] border-dotted border-r-2 p-10">
          <img src={safe_delevery} alt="Safe Delevery" />
        </div>
        <div className="ml-10">
            <h2 className="text-[24px] font-extrabold  ">24/7 Call Center Support</h2>
            <p className="mt-5">Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
        </div>
      </div>

      <div className="border-b-2 border-dotted mt-15 mb-10 border-secondary">

      </div>
    </div>
  );
};

export default Support;
