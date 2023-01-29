import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import section71 from "../../Assets/section71.webp";
import section72 from "../../Assets/section72.webp";
import section73 from "../../Assets/section73.webp";
import section74 from "../../Assets/section74.webp";
import section81 from "../../Assets/section81.webp";
import section82 from "../../Assets/section82.webp";
import section83 from "../../Assets/section83.webp";
import section84 from "../../Assets/section84.webp";

const HomePageSection9 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section71}
          alt="img1"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section72}
          alt="img2"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section73}
          alt="img3"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section74}
          alt="img4"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section81}
          alt="img5"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section82}
          alt="img5"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section83}
          alt="img5"
        />
      </div>
      <div>
        <Image
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
          src={section84}
          alt="img5"
        />
      </div>
    </Slider>
  );
};

export { HomePageSection9 };
