import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCartCard } from "../Components/CartPageComponent/SingleCartCard";
import { getCartItems } from "../Redux/cartReducer/action";
import "../Styles/CartPageStyles/CartPage.css";
import Footer from "./FooterPage";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const [ison, setIson] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalmrp, setTotalmrp] = useState(0);

  useEffect(() => {
    if (cartItems.length === 0 || ison === true) {
      dispatch(getCartItems());
    }
    setIson(true);
  }, [dispatch, cartItems.length, cartItems, ison]);

  useEffect(() => {
    if (cartItems.length > 0) {
      var value = cartItems.reduce((sum, ele) => {
        sum += ele.price * ele.quantity;
        return sum;
      }, 0);
      setTotal(value);
    }
  }, [cartItems, cartItems.length]);

  useEffect(() => {
    if (cartItems.length > 0) {
      var value = cartItems.reduce((sum_mrp, ele) => {
        if (ele.mrp) {
          sum_mrp += ele.mrp * ele.quantity;
        }
        return sum_mrp;
      }, 0);
      setTotalmrp(value);
    }
  }, [cartItems, cartItems.length]);

  return (
    <>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        flexDirection="column"
        padding="3%"
        paddingTop={{ base: "15%", sm: "12%", md: "10%", lg: "10%", xl: "10%" }}
        height="fit-content"
      >
        <Box fontWeight="bold" fontSize={{ base: "100%" }} color="darkviolet">
          Total price:-{" "}
          <span className="totalAmount">₹{parseFloat(total).toFixed(2)}</span>
        </Box>
        <Box fontWeight="bold" fontSize={{ base: "100%" }} color="darkviolet">
          Total MRP:-{" "}
          <span className="totalAmountmrp">
            ₹{parseFloat(totalmrp).toFixed(2)}
          </span>
        </Box>
        <Box fontWeight="bold" fontSize={{ base: "100%" }} color="darkviolet">
          Total Items:- <span className="totalAmount">{cartItems.length}</span>
        </Box>
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
      <section>
        <Footer />
      </section>
    </>
  );
};

export { CartPage };
