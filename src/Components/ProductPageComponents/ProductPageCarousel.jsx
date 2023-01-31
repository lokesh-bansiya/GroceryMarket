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
import img8 from "../../Assets/sliderOneImgThree.webp";
import img9 from "../../Assets/sliderOneImgFour.webp";
import img10 from "../../Assets/sliderOneImgFive.webp";
import img11 from "../../Assets/beautycaro1.webp";
import img12 from "../../Assets/beautycaro2.webp";
import img13 from "../../Assets/beautycaro3.webp";
import img14 from "../../Assets/meat1.webp";
import img15 from "../../Assets/meat2.webp";
import img16 from "../../Assets/meat3.webp";
import img17 from "../../Assets/carouselFruit1.webp";
import img18 from "../../Assets/carouselFruit2.webp";
import img19 from "../../Assets/carouselFruit3.webp";
import img20 from "../../Assets/carouselFruit4.webp";
import img21 from "../../Assets/carouselFruit5.webp";
import img22 from "../../Assets/carouselFruit6.webp";

const ProductPageCarousel = () => {
  var settings = {
    dots: false,
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
        <Image width="100%" src={img21} alt="img1" />
      </div>
      <div width="100%">
        <Image width="100%" src={img22} alt="img2" />
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
        <Image width="100%" src={img6} alt="img1" />
      </div>
      <div width="100%">
        <Image width="100%" src={img11} alt="img2" />
      </div>
      <div width="100%">
        <Image width="100%" src={img14} alt="img3" />
      </div>
      <div width="100%">
        <Image width="100%" src={img17} alt="img4" />
      </div>
      <div width="100%">
        <Image width="100%" src={img7} alt="img5" />
      </div>
      <div width="100%">
        <Image width="100%" src={img12} alt="img1" />
      </div>
      <div width="100%">
        <Image width="100%" src={img15} alt="img2" />
      </div>
      <div width="100%">
        <Image width="100%" src={img18} alt="img3" />
      </div>
      <div width="100%">
        <Image width="100%" src={img8} alt="img4" />
      </div>
      <div width="100%">
        <Image width="100%" src={img13} alt="img5" />
      </div>
      <div width="100%">
        <Image width="100%" src={img16} alt="img1" />
      </div>
      <div width="100%">
        <Image width="100%" src={img20} alt="img2" />
      </div>
      <div width="100%">
        <Image width="100%" src={img9} alt="img3" />
      </div>
      <div width="100%">
        <Image width="100%" src={img10} alt="img4" />
      </div>
      <div width="100%">
        <Image width="100%" src={img19} alt="img5" />
      </div>
    </Slider>
  );
};

export { ProductPageCarousel };
