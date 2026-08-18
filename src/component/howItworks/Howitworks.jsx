import React, { useState } from "react";
import { ImTruck } from "react-icons/im";

const Howitworks = () => {
  return (
    <div>
      <h2 className="text-secondary font-extrabold text-[32px]">How it Works</h2>
      <div className="flex items-center gap-5 p-5">

        {/* CARD 01 */}
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <div className="text-3xl text-secondary">
               <ImTruck></ImTruck>
            </div>
            <h2 className="card-title text-[20px] font-bold text-secondary">Booking Pick & Drop</h2>
            <p className="text-[#606060] font-medium">
             From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>

            {/* CARD 02 */}
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <div className="text-3xl text-secondary">
               <ImTruck></ImTruck>
            </div>
            <h2 className="card-title text-[20px] font-bold text-secondary">Cash on delevery</h2>
            <p className="text-[#606060] font-medium">
             From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>

            {/* CARD 03 */}
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <div className="text-3xl text-secondary">
               <ImTruck></ImTruck>
            </div>
            <h2 className="card-title text-[20px] font-bold text-secondary">Delevery Hub</h2>
            <p className="text-[#606060] font-medium">
             From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>

             {/* CARD 04 */}
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <div className="text-3xl text-secondary">
               <ImTruck></ImTruck>
            </div>
            <h2 className="card-title text-[20px] font-bold text-secondary">Booking SME & Corporate</h2>
            <p className="text-[#606060] font-medium">
             From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Howitworks;
