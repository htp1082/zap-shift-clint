import React from "react";
import Success from "../../component/success/Success";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="w-[1200px] mx-auto p-8">
        <div>
          <h2 className="text-secondary text-[56px] font-extrabold">
            About Us
          </h2>
          <p className="w-[630px] text-[#606060]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div>
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Story"
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. <br /><br /> We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. <br /><br /> We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. </p>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Success"
              defaultChecked
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
             <Success></Success>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Team & Others"
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              <p>terms and condition is loading....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
