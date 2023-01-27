
import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "../../Assets/meat1.webp";
import img2 from "../../Assets/meat2.webp";
import img3 from "../../Assets/meat3.webp";

const NonVegCarousel =() => {
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
      <div>
        <Image src={img1} alt="img1"/>
      </div>
      <div>
      <Image src={img2} alt="img2"/>
      </div>
      <div>
      <Image src={img3} alt="img3"/>
      </div>
    </Slider>
  );
}

export {NonVegCarousel};