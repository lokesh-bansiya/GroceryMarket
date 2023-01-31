import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import "../Styles/Products.css";
import { ProductPageCarousel } from "../Components/ProductPageComponents/ProductPageCarousel";
import { Stack,Box, Image  } from "@chakra-ui/react";
import { SingleProductCard } from "../Components/ProductPageComponents/SingleProductCard";
import Footer from "./FooterPage";
import loading_blue from "../Assets/loading_blue.gif";


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
          {
            products.length === 0 ? (
              <Box
                display="flex"
                justifyContent="center"
                textAlign="center"
                width="100%"
                height="50vh"
              >
                <Box
                  width={{
                    base: "50%",
                    sm: "40%",
                    md: "40%",
                    lg: "20%",
                    xl: "20%",
                  }}
                  display="block"
                  textAlign="center"
                >
                  <Image width="100%" src={loading_blue} alt="emptycart" />
                  <Box
                    fontWeight="bold"
                    fontSize={{
                      base: "100%",
                      sm: "100%",
                      md: "200%",
                      lg: "200%",
                      xl: "200%",
                    }}
                    color="darkblue"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    textAlign="center"
                    margin="auto"
                    fontFamily={"Dancing Script, cursive"}
                  >
                    Empty Cart...
                  </Box>
                </Box>
              </Box>
            ) : (
              <div className="mainBoxAtProductPage">
                {
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
                    })
                }
              </div>
            )
          }
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { Product };
