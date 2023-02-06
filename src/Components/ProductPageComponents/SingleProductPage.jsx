import "../../Styles/ProductPageStyles/SingleProductPage.css";
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Magnifier from "react-magnifier";
import {
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../../Redux/appReducer/action";
import cart from "../../Assets/trollyForCard.png";
import { addProductToCart } from "../../Redux/cartReducer/action";
import { CarouselForSingleProductPageLargScreen } from "./CarouselForSingleProductPageLargScreen";
import { CarouselForSingleProductPageSmallScreen } from "./CarouselForSingleProductPageSmallScreen";
import { CarouselForSingleProductPageExtrsSmallScreen } from "./CarouselForSingleProductPageExtrsSmallScreen";
import Footer from "../../Pages/FooterPage";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((store) => store.appReducer.singleProduct);
  const products = useSelector((store) => store.appReducer.allProducts);
  const toast = useToast();

  const addToCart = () => {
    const payload = {
      brand: singleProduct.brand,
      name: singleProduct.name,
      weight: singleProduct.weight,
      price: singleProduct.price,
      mrp: singleProduct.mrp,
      ImgSrc: singleProduct.ImgSrc,
      category: singleProduct.category,
      sasta: singleProduct.sasta,
      packet: singleProduct.packet,
      offers: singleProduct.offers,
      isavailable: singleProduct.isavailable,
      quantity: singleProduct.quantity,
    }
    dispatch(addProductToCart(payload)).then(() =>
      toast({
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
        render: () => (
          <Box
            border="2px solid green"
            textAlign="center"
            borderRadius="10px"
            fontWeight="bolder"
            color="white"
            p={3}
            bg="blue.500"
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            {`Product Added to Cart`}
          </Box>
        ),
      })
    );
  };

  // decrease quantity
  const decreaseQuantity = (id) => {
    const item = products.filter((el) => el._id === id);
    var newQuantity;

    if (item[0].quantity > 1) {
      newQuantity = {
        quantity: Number(item[0].quantity) - 1,
      };
    }
    dispatch(updateProduct(id, newQuantity))
      .then(() => dispatch(getAllProducts()))
      .then(() => dispatch(getSingleProduct(id)));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const item = products.filter((el) => el._id === id);
    var newQuantity;

    if (item[0].quantity < 10) {
      newQuantity = {
        quantity: Number(item[0].quantity) + 1,
      };
    }
    dispatch(updateProduct(id, newQuantity))
      .then(() => dispatch(getAllProducts()))
      .then(() => dispatch(getSingleProduct(id)));
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts()).then(() => dispatch(getSingleProduct(id)));
    }
  }, [products.length, dispatch, id]);

  useEffect(() => {
    if (singleProduct.length === 0) {
      dispatch(getSingleProduct(id));
    }
    singleProduct.length = 0;
  }, [dispatch, singleProduct.length, singleProduct, id]);

  return (
    <Box
      paddingTop={{ base: "27%", sm: "20%", md: "15%", lg: "12%", xl: "10%" }}
    >
      <Box
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        padding="3%"
        borderRadius="7px"
        display="flex"
        justifyContent="space-between"
        width="70%"
        margin="auto"
        border="1px solid black"
      >
        <Box
          width="40%"
          padding="2%"
          border="1px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Magnifier
            mgShape="square"
            width="100%"
            src={singleProduct.ImgSrc}
            alt={singleProduct.brand}
          />
        </Box>
        <Box width="55%">
          <Box>
            <Text
              color="darkgreen"
              fontSize={{
                base: "50%",
                sm: "60%",
                md: "90%",
                lg: "110%",
                xl: "130%",
              }}
              fontWeight="500"
            >
              {singleProduct.name}
            </Text>
            {singleProduct.weight ? (
              <Text
                fontSize={{
                  base: "50%",
                  sm: "60%",
                  md: "90%",
                  lg: "100%",
                  xl: "110%",
                }}
                fontWeight="500"
              >
                {singleProduct.weight}
              </Text>
            ) : (
              <></>
            )}
            <Text
              fontSize={{
                base: "50%",
                sm: "60%",
                md: "95%",
                lg: "100%",
                xl: "110%",
              }}
              fontWeight="500"
            >
              {singleProduct.category}
            </Text>
            {singleProduct.sasta ? (
              <Text
                fontSize={{
                  base: "50%",
                  sm: "60%",
                  md: "95%",
                  lg: "100%",
                  xl: "110%",
                }}
                fontWeight="500"
                color="blue.600"
              >
                {singleProduct.sasta}
              </Text>
            ) : (
              <></>
            )}
            {singleProduct.packet ? (
              <Text
                fontSize={{
                  base: "50%",
                  sm: "60%",
                  md: "90%",
                  lg: "100%",
                  xl: "110%",
                }}
                fontWeight="500"
              >
                {singleProduct.packet}
              </Text>
            ) : (
              <></>
            )}
            {singleProduct.offers ? (
              <Text
                fontSize={{
                  base: "50%",
                  sm: "60%",
                  md: "90%",
                  lg: "100%",
                  xl: "110%",
                }}
                fontWeight="500"
              >
                {singleProduct.offers}
              </Text>
            ) : (
              <></>
            )}
            <Text
              display="flex"
              flexDirection="column"
              width="80%"
              justifyContent="space-between"
              fontSize={{
                base: "50%",
                sm: "60%",
                md: "70%",
                lg: "90%",
                xl: "100%",
              }}
              fontWeight="500"
            >
              <span>
                Price for one item:- ₹{parseFloat(singleProduct.price).toFixed(2)}
              </span>{" "}
              {singleProduct.mrp ? (
                <Text>MRP for one item:- <span className="strickPrice">
                  ₹{parseFloat(singleProduct.mrp).toFixed(2)}{" "}
                </span></Text>
              ) : (
                <></>
              )}
            </Text>
            <Text
              display="flex"
              flexDirection={{base: "column", sm:"row", md:"row",lg:"row",xl:"row"}}
              justifyContent="space-between"
              fontSize={{
                base: "50%",
                sm: "60%",
                md: "80%",
                lg: "90%",
                xl: "100%",
              }}
              fontWeight="500"
            >
              <span>
                Total Price:- ₹{parseFloat(singleProduct.quantity * singleProduct.price).toFixed(2)}
              </span>{" "}
              {singleProduct.mrp ? (
                <span className="strickPrice">
                  Total MRP:- ₹{parseFloat(singleProduct.quantity * singleProduct.mrp).toFixed(2)}{" "}
                </span>
              ) : (
                <></>
              )}
            </Text>
          </Box>
          <Box>
            <Box
              width={{
                base: "70%",
                sm: "60%",
                md: "60%",
                lg: "50%",
                xl: "50%",
              }}
              display={{ base: "flex" }}
              justifyContent="space-around"
              marginTop="5%"
            >
              <Text
                fontWeight="bold"
                fontSize={{
                  base: "50%",
                  sm: "60%",
                  md: "90%",
                  lg: "110%",
                  xl: "110%",
                }}
                marginRight="3%"
              >
                Quantity:-
              </Text>
              <button
                className="singleproductpage_btn"
                onClick={() => decreaseQuantity(id)}
              >
                −
              </button>
              <button className="singleproductpage_btn">
                {singleProduct.quantity}
              </button>
              <button
                className="singleproductpage_btn"
                onClick={() => increaseQuantity(id)}
              >
                +
              </button>
            </Box>
            <Box width={{base: "50%",sm:"50%",md:"60%",lg:"80%",xl:"80%"}} marginTop="5%">
              <Button
                backgroundColor="blue.400"
                padding="1%"
                border="2px solid darkred"
                width="fit-content"
                height="fit-content"
                fontWeight="bold"
                margin="auto"
                onClick={() => addToCart(id)}
                fontSize={{
                  base: "70%",
                  sm: "70%",
                  md: "90%",
                  lg: "110%",
                  xl: "110%",
                }}
              >
                <Text
                  _hover={{ color: "black" }}
                  color="white"
                  marginRight="5%"
                >
                  Add
                </Text>
                <Image
                  backgroundColor="white"
                  borderRadius="10px"
                  padding="2%"
                  src={cart}
                  width={{
                    base: "12%",
                    sm: "13%",
                    md: "15%",
                    lg: "15%",
                    xl: "15%",
                  }}
                  alt="Add"
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageLargScreen />
      </Box>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "none",
          xl: "none",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageSmallScreen />
      </Box>
      <Box
        display={{
          base: "none",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageExtrsSmallScreen />
      </Box>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageLargScreen />
      </Box>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "none",
          xl: "none",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageSmallScreen />
      </Box>
      <Box
        display={{
          base: "none",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        width="90%"
        margin="auto"
        marginTop="3%"
      >
        <CarouselForSingleProductPageExtrsSmallScreen />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export { SingleProductPage };
