//
import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "../../Assets/carouselFruit1.webp";
import img2 from "../../Assets/carouselFruit2.webp";
import img3 from "../../Assets/carouselFruit3.webp";
import img4 from "../../Assets/carouselFruit4.webp";
import img5 from "../../Assets/carouselFruit5.webp";
import img6 from "../../Assets/carouselFruit6.webp";

const VegetableCarousel = () => {
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
        <Image src={img1} alt="img1" />
      </div>
      <div>
        <Image src={img2} alt="img2" />
      </div>
      <div>
        <Image src={img3} alt="img3" />
      </div>
      <div>
        <Image src={img4} alt="img4" />
      </div>
      <div>
        <Image src={img5} alt="img5" />
      </div>
      <div>
        <Image src={img6} alt="img6" />
      </div>
    </Slider>
  );
};

export { VegetableCarousel };
