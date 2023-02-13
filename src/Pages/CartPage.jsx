import { Box, Image, Button, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCartCard } from "../Components/CartPageComponent/SingleCartCard";
import { getCartItems } from "../Redux/cartReducer/action";
import "../Styles/CartPageStyles/CartPage.css";
import Footer from "./FooterPage";
import emptycart from "../Assets/emptycart.gif";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const loading = useSelector((store) => store.appReducer.isLoadingCart);
  const [ison, setIson] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalmrp, setTotalmrp] = useState(0);
  const userKey = localStorage.getItem("userKey");

  useEffect(() => {
    if (cartItems.length === 0 || ison === true) {
      dispatch(getCartItems());
    }
    setIson(true);
  }, [dispatch, cartItems.length, cartItems, ison]);

  useEffect(() => {
    if (cartItems.length > 0) {
      var value = cartItems.filter((el) => el.cartID === userKey).reduce((sum, ele) => {
        sum += ele.price * ele.quantity;
        return sum;
      }, 0);
      setTotal(value);
    }
    else {
      setTotal(0);
    }
  }, [cartItems, cartItems.length, userKey]);

  useEffect(() => {
    if (cartItems.length > 0) {
      var value = cartItems.filter((el) => el.cartID === userKey).reduce((sum_mrp, ele) => {
        if (ele.mrp) {
          sum_mrp += ele.mrp * ele.quantity;
        }
        return sum_mrp;
      }, 0);
      setTotalmrp(value);
    }
    else {
      setTotalmrp(0);
    }
  }, [cartItems, cartItems.length, userKey]);


  if (loading) {
    return (
      <Grid
        w={{
          base: "90%",
          md: "80%",
          lg: "80%",
        }}
        m="auto"
        templateColumns={{
          base: "repeat(1,1fr)"
        }}
        gap="5"
        p="5"
        pt="10%"
      >
        {new Array(5).fill(0).map((e, i) => (
          <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
            <Skeleton size="10" h="110px" />
            <SkeletonText
              w="80%"
              m="auto"
              mb="20px"
              mt="4"
              noOfLines={2}
              spacing="4"
            />
          </Box>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        padding="2%"
        paddingTop={{ base: "25%", sm: "20%", md: "10%", lg: "10%", xl: "10%" }}
        height="fit-content"
      >
        <Box
          width="fit-content"
          display="flex"
          flexDirection="column"
          height="fit-content"
        >
          <Box fontWeight="bold" fontSize={{base: "60%", sm:"80%", md:"100%",lg:"100%",xl:"100%"}} color="darkviolet">
            Total price:-{" "}
            <span className="totalAmount">₹{parseFloat(total).toFixed(2)}</span>
          </Box>
          <Box fontWeight="bold" fontSize={{base: "60%", sm:"80%", md:"100%",lg:"100%",xl:"100%"}} color="darkviolet">
            Total MRP:-{" "}
            <span className="totalAmountmrp">
              ₹{parseFloat(totalmrp).toFixed(2)}
            </span>
          </Box>
          <Box fontWeight="bold" fontSize={{base: "60%", sm:"80%", md:"100%",lg:"100%",xl:"100%"}} color="darkviolet">
            Total Items:- <span className="totalAmount">{cartItems.filter((el) => el.cartID === userKey).length}</span>
          </Box>
        </Box>

        <Box
          width="fit-content"
          display="flex"
          height="fit-content"
        >
          <Link to="/checkout"><Button size={{base: "sm", sm: "md", md: "md", lg:"md", xl:"lg"}} fontSize={{base: "60%", sm:"80%", md:"100%",lg:"100%",xl:"100%"}} colorScheme="blue">Checkout</Button></Link>
        </Box>

      </Box>

      {
        cartItems.filter((el) => el.cartID === userKey).length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            textAlign="center"
            height="fit-content"
            width="100%"
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
              <Image width="100%" src={emptycart} alt="emptycart" />
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
              <Box><Link to="/products"><Button size={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'md', xl: 'md' }} colorScheme={'pink'} marginTop="5%">Shop now</Button></Link></Box>
            </Box>
          </Box>
        ) : (
          <Box
            width="80%"
            margin="auto"
            display="grid"
            gridTemplateColumns={{ base: "repeat(1,1fr)" }}
          >
            {
              cartItems.filter((el) => el.cartID === userKey).map((ele) => {
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
              })
            }
          </Box>
        )
      }

      <section>
        <Footer />
      </section>
    </>
  );
};

export { CartPage };

