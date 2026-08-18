import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannar1 from '../../assets/banner/banner1.png'
import bannar2 from '../../assets/banner/banner2.png'
import bannar3 from '../../assets/banner/banner3.png'

const Bannar = () => {
  return (
    <Carousel>
      <div>
        <img src={bannar1} />
      </div>
      <div>
        <img src={bannar2} />
      </div>
      <div>
        <img src={bannar3} />
      </div>
    </Carousel>
  );
};

export default Bannar;
