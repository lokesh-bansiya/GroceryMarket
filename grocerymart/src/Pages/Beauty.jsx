import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import { SingleCardPage } from "../Components/ProductPageComponents/ProductCardPage";
import "../Styles/Products.css";
import { ProductPageCarousel } from "../Components/ProductPageComponents/ProductPageCarousel";
import { Stack } from "react-bootstrap";
import { Checkbox } from "@chakra-ui/react";

const Beauty = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);

  return (
    <div className="ProductContainer">
      <section>
        <ProductPageCarousel />
      </section>
      <section>
        <div className="sidebarAtProductPage">
          <Stack spacing={5} direction="column">
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme="black" defaultChecked>
              Checkbox
            </Checkbox>
          </Stack>
        </div>
        <div className="mainBoxAtProductPage">
          {products.length && products.filter((item) => item.category === "beauty").map((ele) => {
              return (
                <SingleCardPage
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
  );
};

export { Beauty };
