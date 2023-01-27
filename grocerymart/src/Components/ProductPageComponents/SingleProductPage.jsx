// SingleProductPage.jsx

import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../../Redux/appReducer/action";
import cart from "../../Assets/trollyForCard.png";
import { addProductToCart } from "../../Redux/cartReducer/action";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((store) => store.appReducer.singleProduct);
  const products = useSelector((store) => store.appReducer.allProducts);
  const toast = useToast();

  const addToCart = (id) => {
    dispatch(addProductToCart(id)).then(() =>
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
    dispatch(updateProduct(id, newQuantity)).then(() =>
      dispatch(getAllProducts())
    );
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
    dispatch(updateProduct(id, newQuantity)).then(() =>
      dispatch(getAllProducts())
    );
  };

  useEffect(() => {
    if (singleProduct.length === 0) {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch, singleProduct.length]);

  return (
    <Box>
      <Box>
        <Image src={singleProduct.ImgSrc} alt={singleProduct.brand} />
      </Box>
      <Box>
        <Box>
          <Text
            color="darkgreen"
            fontSize={{
              base: "60%",
              sm: "70%",
              md: "95%",
              lg: "100%",
              xl: "110%",
            }}
            fontWeight="500"
          >
            {singleProduct.name}
          </Text>
          {singleProduct.weight ? (
            <Text
              fontSize={{
                base: "60%",
                sm: "70%",
                md: "95%",
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
              base: "60%",
              sm: "70%",
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
                base: "60%",
                sm: "70%",
                md: "95%",
                lg: "100%",
                xl: "110%",
              }}
              fontWeight="500"
            >
              {singleProduct.sasta}
            </Text>
          ) : (
            <></>
          )}
          {singleProduct.packet ? (
            <Text
              fontSize={{
                base: "60%",
                sm: "70%",
                md: "95%",
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
                base: "60%",
                sm: "70%",
                md: "95%",
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
            width="80%"
            justifyContent="space-between"
            fontSize={{
              base: "60%",
              sm: "70%",
              md: "95%",
              lg: "100%",
              xl: "110%",
            }}
            fontWeight="500"
          >
            <span>Price:- ₹{singleProduct.quantity * singleProduct.price}</span>{" "}
            {singleProduct.mrp ? (
              <span className="strickPrice">
                MRP:- ₹{singleProduct.quantity * singleProduct.mrp}{" "}
              </span>
            ) : (
              <></>
            )}
          </Text>
        </Box>
        <Box>
          <Box
            width={{ base: "40%", sm: "30%", md: "20%", lg: "20%", xl: "20%" }}
            display={{ base: "flex" }}
            justifyContent="space-around"
            marginTop="5%"
          >
            <button className="Cart_btn" onClick={() => decreaseQuantity(id)}>
              −
            </button>
            <button className="Cart_btn">{singleProduct.quantity}</button>
            <button className="Cart_btn" onClick={() => increaseQuantity(id)}>
              +
            </button>
          </Box>
          <Box>
            <Button
              backgroundColor="green.100"
              padding="1%"
              paddingTop="7%"
              paddingBottom="7%"
              border="2px solid blue"
              width="fit-content"
              height="fit-content"
              margin="auto"
              onClick={() => addToCart(id)}
            >
              Add <Image src={cart} alt="Add" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SingleProductPage };
