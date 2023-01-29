import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { HomePageSingleCard } from "./HomePageSingleCard";
import { getProductsByCategoryBeauty } from "../../Redux/appReducer/action";

const HomeCategoryBeauty = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (store) => store.appReducer.itemsByCategoryBeauty
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsByCategoryBeauty());
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

export { HomeCategoryBeauty };
