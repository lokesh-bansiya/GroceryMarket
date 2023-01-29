import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/appReducer/action";
import { HomePageSingleCard } from "./HomePageSingleCard";

const HomePageAllProductsCarousel = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);

  return (
    <Slider {...settings}>
      {products.length &&
        products.map((ele) => {
          return (
            <HomePageSingleCard
              key={ele._id}
              id={ele._id}
              brand={ele.brand}
              name={ele.name}
              mrp={ele.mrp}
              price={ele.price}
              quantity={ele.quantity}
              weight={ele.weight}
              category={ele.category}
              ImgSrc={ele.ImgSrc}
              sasta={ele.sasta}
              packet={ele.packet}
              isavailable={ele.isavailable}
              offers={ele.offers}
            />
          );
        })}
    </Slider>
  );
};

export { HomePageAllProductsCarousel };
