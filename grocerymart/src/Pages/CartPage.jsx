import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCartCard } from "../Components/CartPageComponent/SingleCartCard";
import { getCartItems } from "../Redux/cartReducer/action";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartReducer.cartItems);

  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(getCartItems());
    }
  }, [dispatch, cartItems.length]);

  return (
    <>
      <Box display="flex" padding="3%" paddingTop="10%" height="fit-content" >
        <Box>Total proce:-</Box>
      </Box>
      <Box
        width="80%"
        margin="auto"
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,1fr)" }}
        gap="0.5%"
      >
        {cartItems.length &&
          cartItems.map((ele) => {
            return (
              <SingleCartCard
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
      </Box>
    </>
  );
};

export { CartPage };
