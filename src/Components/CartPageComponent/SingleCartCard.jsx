import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Image, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  getCartItems,
  updateCartItemQuantity,
} from "../../Redux/cartReducer/action";
import "../../Styles/CartPageStyles/SingleCartCard.css";

const SingleCartCard = ({
  id,
  brand,
  name,
  mrp,
  price,
  quantity,
  weight,
  category,
  ImgSrc,
  sasta,
  packet,
  isavailable,
  offers,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartReducer.cartItems);

  const deleteCartItemHandler = (id) => {
    dispatch(deleteCartItem(id))
      .then(() => dispatch(getCartItems()))
      .then(() =>
        toast({
          title: "Success!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
          render: () => (
            <Box
              border="1px solid green"
              textAlign="center"
              borderRadius="10px"
              fontWeight="bolder"
              color="white"
              p={3}
              bg="green.500"
              boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            >
              {`CartItem deleted successfully!`}
            </Box>
          ),
        })
      );
  };

  // decrease quantity
  const decreaseQuantity = (id) => {
    const item = cartItems.filter((el) => el._id === id);
    var newQuantity;

    if (item[0].quantity > 1) {
      newQuantity = {
        quantity: Number(item[0].quantity) - 1,
      };
    }
    dispatch(updateCartItemQuantity(id, newQuantity)).then(() =>
      dispatch(getCartItems())
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const item = cartItems.filter((el) => el._id === id);
    var newQuantity;

    if (item[0].quantity < 10) {
      newQuantity = {
        quantity: Number(item[0].quantity) + 1,
      };
    }
    dispatch(updateCartItemQuantity(id, newQuantity)).then(() =>
      dispatch(getCartItems())
    );
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(getCartItems());
    }
  }, [dispatch, cartItems.length, cartItems]);


  return (
    <Box
      display={{ base: "flex" }}
      justifyContent="space-between"
      border="1px solid black"
      borderRadius="5px"
      margin="1%"
      padding={{ base: "4%", sm: "4%", md: "2%", lg: "2%", xl: "2%" }}
      boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    >
      <Box
        display={{ base: "flex" }}
        flexDirection="column"
        justifyContent="space-between"
        textAlign="center"
        width="30%"
      >
        <Box width="70%" margin="auto">
          <Image width="100%" src={ImgSrc} alt={brand} />
        </Box>
        <Box
          fontSize={{
            base: "60%",
            sm: "70%",
            md: "95%",
            lg: "100%",
            xl: "110%",
          }}
          fontWeight="bold"
          color="red.700"
          display="flex"
          justifyContent="center"
        >
          {brand}
        </Box>
      </Box>
      <Box
        display={{ base: "flex" }}
        flexDirection="column"
        justifyContent="space-between"
        width="70%"
        paddingRight="5%"
      >
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
            {name}
          </Text>
          {weight ? (
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
              {weight}
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
            {category}
          </Text>
          {sasta ? (
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
              {sasta}
            </Text>
          ) : (
            <></>
          )}
          {packet ? (
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
              {packet}
            </Text>
          ) : (
            <></>
          )}
          {offers ? (
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
              {offers}
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
            <span>Price:- ₹{parseFloat(quantity * price).toFixed(2)}</span>{" "}
            {mrp ? (
              <span className="strickPrice">
                MRP:-₹{parseFloat(quantity * mrp).toFixed(2)}
              </span>
            ) : (
              <></>
            )}
          </Text>
        </Box>

        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Box
            width={{ base: "40%", sm: "30%", md: "20%", lg: "20%", xl: "20%" }}
            display={{ base: "flex" }}
            justifyContent="space-around"
            marginTop="5%"
          >
            <button className="Cart_btn" onClick={() => decreaseQuantity(id)}>
              −
            </button>
            <button className="Cart_btn">{quantity}</button>
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
            >
              <DeleteIcon
                onClick={() => deleteCartItemHandler(id)}
                fontSize={{
                  base: "90%",
                  sm: "90%",
                  md: "100%",
                  lg: "100%",
                  xl: "110%",
                }}
                color="red"
                cursor="pointer"
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SingleCartCard };
