import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import "../Styles/Products.css";
import { ProductPageCarousel } from "../Components/ProductPageComponents/ProductPageCarousel";
import { Stack,Box  } from "@chakra-ui/react";
import { SingleProductCard } from "../Components/ProductPageComponents/SingleProductCard";
import Footer from "./FooterPage";

// onClick={() => categoryhandle("vegetable")}

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);

  return (
    <>
      <div className="ProductContainer">
        <section>
          <ProductPageCarousel />
        </section>
        <section>
          <div className="sidebarAtProductPage">
            <Stack direction="column">
              <Box></Box>
              
            </Stack>
          </div>
          <div className="mainBoxAtProductPage">
            {products.length &&
              products.map((ele) => {
                return (
                  <SingleProductCard
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
          </div>
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { Product };
