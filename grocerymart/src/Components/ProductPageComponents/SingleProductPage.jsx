// SingleProductPage.jsx
import "../../Styles/ProductPageStyles/SingleProductPage.css";
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
import Slider from "react-slick";
import { HomePageSingleCard } from "../HomePageComponents/HomePageSingleCard";

const SingleProductPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector((store) => store.appReducer.singleProduct);
    const products = useSelector((store) => store.appReducer.allProducts);
    const toast = useToast();


    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };


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
        dispatch(updateProduct(id, newQuantity))
            .then(() => dispatch(getAllProducts()))
            .then(() => dispatch(getSingleProduct(id)))
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
            .then(() => dispatch(getSingleProduct(id)))
    };


    useEffect(() => {
        if (products.length === 0) {
            dispatch(getAllProducts()).then(() => dispatch(getSingleProduct(id)));
        }
    }, [products.length, dispatch, id]);

    useEffect(() => {
        if (singleProduct.length === 0) {
            dispatch(getSingleProduct(id))
        }
        singleProduct.length = 0;
    }, [dispatch, singleProduct.length,singleProduct, id]);


    return (
        <Box paddingTop="10%">
            <Box
                boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                padding="3%"
                borderRadius="7px"
                display="flex"
                justifyContent="space-between"
                width="80%"
                margin="auto"
                border="1px solid black"
            >
                <Box width="40%" padding="2%" border="1px solid black">
                    <Image width="100%" src={singleProduct.ImgSrc} alt={singleProduct.brand} />
                </Box>
                <Box width="55%">
                    <Box>
                        <Text
                            color="darkgreen"
                            fontSize={{
                                base: "90%",
                                sm: "100%",
                                md: "110%",
                                lg: "120%",
                                xl: "130%",
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
                                base: "80%",
                                sm: "100%",
                                md: "100%",
                                lg: "110%",
                                xl: "110%",
                            }}
                            fontWeight="500"
                        >
                            <span>
                                Price:- ₹{singleProduct.quantity * singleProduct.price}
                            </span>{" "}
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
                            <Text fontWeight="bold" marginRight="3%">Quantity:- </Text>
                            <button className="singleproductpage_btn" onClick={() => decreaseQuantity(id)}>
                                −
                            </button>
                            <button className="singleproductpage_btn">{singleProduct.quantity}</button>
                            <button className="singleproductpage_btn" onClick={() => increaseQuantity(id)}>
                                +
                            </button>
                        </Box>
                        <Box marginTop="5%">
                            <Button
                                backgroundColor="blue.400"
                                padding="1%"
                                border="2px solid darkred"
                                width="fit-content"
                                height="fit-content"
                                fontWeight="bold"
                                margin="auto"
                                onClick={() => addToCart(id)}
                            >
                                <Text _hover={{ color: "black" }} color="white" marginRight="5%">Add</Text> <Image backgroundColor="white" borderRadius="10px" padding="2%" width="15%" src={cart} alt="Add" />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box width="90%" margin="auto" marginTop="3%">
                <Slider {...settings}>
                    {
                        products.length && products.map((ele) => {
                            return (
                                <HomePageSingleCard
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
                </Slider>
            </Box>
        </Box>
    );
};

export { SingleProductPage };
