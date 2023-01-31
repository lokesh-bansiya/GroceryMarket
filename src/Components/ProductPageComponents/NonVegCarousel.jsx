import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "../../Assets/meat1.webp";
import img2 from "../../Assets/meat2.webp";
import img3 from "../../Assets/meat3.webp";

const NonVegCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div width="100%">
        <Image width="100%" src={img1} alt="img1" />
      </div>
      <div width="100%">
        <Image width="100%" src={img2} alt="img2" />
      </div>
      <div width="100%">
        <Image width="100%" src={img3} alt="img3" />
      </div>
    </Slider>
  );
};

export { NonVegCarousel };
