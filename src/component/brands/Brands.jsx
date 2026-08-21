import React from "react";
import "swiper/css";
import amazone from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import starpeople from "../../assets/brands/start_people.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const bangLogos = [amazone, casio, moonstar, randstad, star, starpeople];

const Brands = () => {
  return (
    <div>
        <h2 className="text-secondary font-extrabold text-[28px] text-center mt-10">We've helped thousands of sales teams</h2>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >       
        {bangLogos.map((logo, index) => (
          <SwiperSlide key={index} className=" p-10">
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
     
    </Swiper>

        <div className="border-b-2  border-dotted border-secondary my-10"></div>
      </div>
  );
};

export default Brands;
