import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "../../Assets/bakery1.webp";
import img2 from "../../Assets/bakery2.webp";
import img3 from "../../Assets/bakery3.webp";
import img4 from "../../Assets/bakery4.webp";
import img5 from "../../Assets/bakery5.webp";
import img6 from "../../Assets/bakery6.webp";
import img7 from "../../Assets/bakery7.webp";

const BakeryCarousel = () => {
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
      <div width="100%">
        <Image width="100%" src={img4} alt="img4" />
      </div>
      <div width="100%">
        <Image width="100%" src={img5} alt="img5" />
      </div>
      <div width="100%">
        <Image width="100%" src={img6} alt="img4" />
      </div>
      <div width="100%">
        <Image width="100%" src={img7} alt="img5" />
      </div>
    </Slider>
  );
};

export { BakeryCarousel };
