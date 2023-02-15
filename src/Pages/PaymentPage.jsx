import { Box, Button, FormControl, FormLabel, Image, Input, Text, useToast, } from "@chakra-ui/react"
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../Assets/success-tick.gif";
import { addOrderedItems } from "../Redux/appReducer/action";
import { deleteCartItem } from "../Redux/cartReducer/action";


const paymentInitialState = {
    cardno: "",
    date: "",
    cvv: "",
};

const paymentReducer = (state, action) => {
    switch (action.type) {
        case "cardno":
            return {
                ...state,
                cardno: action.payload,
            };
        case "cvv":
            return {
                ...state,
                cvv: action.payload,
            };
        case "date":
            return {
                ...state,
                date: action.payload,
            };
        default:
            return state;
    }
};


const PaymentPage = () => {

    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const userKey = localStorage.getItem("userKey");
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cartReducer.cartItems);
    const [paymentState, setPaymentState] = useReducer(
        paymentReducer,
        paymentInitialState
    );
    const toast = useToast();


    const PaymentHandler = (flag) => {
        if(paymentState.cvv !== "" && paymentState.cardno !== "" && paymentState.date !== ""){
            setFlag(true);
            console.log(flag);
    
            let time = setTimeout(() => {
                cartItems.filter((el) => el.cartID === userKey).length > 0 && 
                cartItems.filter((el) => el.cartID === userKey).forEach((item) => {
                    let payload = {
                        brand: item.brand,
                        name: item.name,
                        weight: item.weight,
                        price: item.price,
                        mrp: item.mrp,
                        ImgSrc: item.ImgSrc,
                        category: item.category,
                        sasta: item.sasta,
                        packet: item.sasta,
                        offers: item.offers,
                        isavailable: item.isavailable,
                        quantity: item.quantity
                    };

                    dispatch(addOrderedItems(payload));
                    dispatch(deleteCartItem(item._id));
                    console.log(item);
                });

                navigate("/");
                setFlag(false);
                console.log(flag);
                clearTimeout(time);

            }, 3000);
        }
        else{
            toast({
                title: "Payment !",
                status: "warning",
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
                        bg="red.500"
                        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                        {`All Fields are required!`}
                    </Box>
                ),
            });
        }
    };

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


    return (
        <>
            {flag ? (<Box width="90%" margin="auto" zIndex="10" height="100vh">
                <Image width="100%" src={img} alt="img" />
            </Box>) : (<></>)}
            <Box paddingTop={{ base: "17%", sm: "10%", md: "10%", lg: "10%", xl: "10%" }}>
                <Box display="flex" flexDirection="column-reverse" padding="5%" width="90%" margin="auto">
                    <Box width={{ base: "90%", sm: "80%", md: "75%", lg: "75%", xl: "75%" }} margin="auto">
                        <Box
                            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            width={{ base: "100%" }}
                            padding="5%"
                            margin="auto"
                        >
                            <Box><Text fontWeight="bold">Add Credit / Debit Card</Text></Box>
                            <Box padding="5%">
                                <Box>
                                    <FormControl isRequired marginRight="1%">
                                        <FormLabel color="blue" fontWeight="500" fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} >Card no.</FormLabel>
                                        <Input
                                            color="gray.500"
                                            value={paymentState.cardno}
                                            onChange={(e) => setPaymentState({ type: "cardno", payload: e.target.value })}
                                            variant='flushed' placeholder='Enter Card No.'
                                            fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box display="flex" marginTop="5%">
                                    <FormControl isRequired marginRight="1%">
                                        <FormLabel color="blue" fontWeight="500" fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} >Valid Thru</FormLabel>
                                        <Input
                                            color="gray.500"
                                            variant='flushed' placeholder='MM/YY'
                                            value={paymentState.date}
                                            onChange={(e) => setPaymentState({ type: "date", payload: e.target.value })}
                                            fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                        />
                                    </FormControl>
                                    <FormControl isRequired marginRight="1%">
                                        <FormLabel color="blue" fontWeight="500" fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} >CVV</FormLabel>
                                        <Input
                                            color="gray.500"
                                            variant='flushed' placeholder='Security Code'
                                            value={paymentState.cvv}
                                            onChange={(e) => setPaymentState({ type: "cvv", payload: e.target.value })}
                                            fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box width="100%" padding="3%">
                                    <Button onClick={() => PaymentHandler(flag)} margin="auto">Place Order & Pay</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={{ base: "100%" }}>
                        <Box padding="5%" width="100%">
                            <Text fontWeight="bold" color="blue">Cart value: {cartItems.filter((el) => el.cartID === userKey).length}</Text>
                            <Text fontWeight="bold" color="teal">Delivery charge: 0</Text>
                            <Text fontWeight="bold" color="red">Total:- {parseFloat(total).toFixed(2)}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export { PaymentPage };