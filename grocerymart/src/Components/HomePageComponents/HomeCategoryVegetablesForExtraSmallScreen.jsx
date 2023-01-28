import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { HomePageSingleCard } from "./HomePageSingleCard";
import { getProductsByCategoryVegetable } from "../../Redux/appReducer/action";

const HomeCategoryVegetablesForExtraSmallScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (store) => store.appReducer.itemsByCategoryVegetable
  );

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2300,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsByCategoryVegetable());
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

export { HomeCategoryVegetablesForExtraSmallScreen };
