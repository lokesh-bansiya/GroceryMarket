import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import "../Styles/Products.css";
import { Stack } from "react-bootstrap";
import { Checkbox } from "@chakra-ui/react";
import loading from "../Assets/loadingforhome.gif";
import { SingleProductCard } from "../Components/ProductPageComponents/SingleProductCard";
import { VegetableCarousel } from "../Components/ProductPageComponents/VegetableCarousel";
import Footer from "./FooterPage";

const Vegetables = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);
  const isLoadingVegetables = useSelector(
    (store) => store.appReducer.isLoadingVegetables
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);

  return (
    <>
      {isLoadingVegetables || products.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "absolute",
            zIndex: "10",
            width: "80%",
            paddingTop: "30%",
            backgroundClip: "white",
            marginLeft: "15%",
          }}
        >
          <div>
            <img
              style={{
                width: "50%",
                margin: "auto",
                marginBottom: "5%",
              }}
              src={loading}
              alt="loading..."
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="ProductContainer">
        <section>
          <VegetableCarousel />
        </section>
        <section>
          <div className="sidebarAtProductPage">
            <Stack spacing={5} direction="column">
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="black" defaultChecked>
                Checkbox
              </Checkbox>
            </Stack>
          </div>
          <div className="mainBoxAtProductPage">
            {products ? (
              products
                .filter((item) => item.category === "vegetable")
                .map((ele) => {
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
                })
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { Vegetables };
