import React from "react";
import service from "../../assets/service.png";

const OurService = () => {
  return (
    <div className="bg-secondary rounded-2xl p-3">
      <div className="py-15">
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold text-white">Our Service</h2>
          <p className="text-[#DADADA]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. <br /> From personal packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 justify-center mt-10 ">
          {/* card 01 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title text-secondary  font-bold text-[24px]">
                Express & Standard Delivery
              </h2>
              <p className="text-center font-medium text-[#606060]">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>

          {/* card 02 */}
          <div className="card bg-base-100 w-96 shadow-sm bg-primary">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title font-bold text-[24px] text-secondary">
                Nationwide Delivery
              </h2>
              <p className="text-center font-medium text-[#606060]">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>

          {/* card 03 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title font-bold text-[24px] text-secondary">
                Fulfillment Solution
              </h2>
              <p className="text-center font-medium text-[#606060]">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>

          {/* card 04 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title font-bold text-[24px] text-secondary">
                Cash on Home Delivery
              </h2>
              <p className="text-center font-medium text-[#606060]">
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>

          {/* card 05 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title font-bold text-[24px] text-secondary">
                Corporate Service / Contract In Logistics
              </h2>
              <p className="text-center font-medium text-[#606060]">
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>

          {/* card 06 */}

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={service} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center mx-5">
              <h2 className="card-title font-bold text-[24px] text-secondary">
                Parcel Return
              </h2>
              <p className="text-center font-medium text-[#606060]">
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
