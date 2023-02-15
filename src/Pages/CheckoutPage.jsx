import { Box, Button, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const checkoutInitialState = {
    firstName: "",
    lastName: "",
    contactNo: "",
    houseNo: "",
    apartmentName: "",
    streetDetail: "",
    landMark: "",
    cityName: "",
    areaDetails: "",
    pincode: "",
};

const checkoutReducer = (state, action) => {
    switch (action.type) {
        case "firstName":
            return {
                ...state,
                firstName: action.payload,
            };
        case "lastName":
            return {
                ...state,
                lastName: action.payload,
            };
        case "contactNo":
            return {
                ...state,
                contactNo: action.payload,
            };
        case "houseNo":
            return {
                ...state,
                houseNo: action.payload,
            };
        case "apartmentName":
            return {
                ...state,
                apartmentName: action.payload,
            };
        case "streetDetail":
            return {
                ...state,
                streetDetail: action.payload,
            };
        case "landMark":
            return {
                ...state,
                landMark: action.payload,
            };
        case "cityName":
            return {
                ...state,
                cityName: action.payload,
            };
        case "areaDetails":
            return {
                ...state,
                areaDetails: action.payload,
            };
        case "pincode":
            return {
                ...state,
                pincode: action.payload,
            };
        default:
            return state;
    }
};

const Checkout = () => {

    const [checkoutState, setCheckoutState] = useReducer(
        checkoutReducer,
        checkoutInitialState
    );
    const toast = useToast();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const userKey = localStorage.getItem("userKey");
    const cartItems = useSelector((store) => store.cartReducer.cartItems);

    const handleSubmit = () => {
        if (checkoutState.firstName !== "" &&
            checkoutState.lastName !== "" &&
            checkoutState.contactNo !== "" &&
            checkoutState.houseNo !== "" &&
            checkoutState.streetDetail !== "" &&
            checkoutState.cityName !== "" &&
            checkoutState.pincode !== "" &&
            checkoutState.apartmentName !== "" &&
            checkoutState.landMark !== "" &&
            checkoutState.areaDetails !== "") {
            console.log(checkoutState);
            toast({
                title: "Product !",
                description: "We've added your product.",
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
                        {`Checkout Successfull!`}
                    </Box>
                ),
            });
            let time = setTimeout(() => {
                navigate("/payment");
                clearTimeout(time);
            }, 3000);

        }
        else {
            toast({
                title: "Product !",
                description: "We've added your product.",
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
    }

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
        <Box
            width="95%"
            margin="auto"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            paddingTop={{ base: "25%", sm: "20%", md: "15%", lg: "10%", xl: "10%" }}
        >
            <Box
                display={{ base: "flex" }}
                flexDirection={{ base: "column-reverse", sm: "column-reverse", md: "row", lg: "row", xl: "row" }}
                justifyContent="space-between"
                width="95%"
                margin="auto"
            >
                <Box
                    display={{ base: "flex" }}
                    flexDirection="column"
                    width={{ base: "90%", sm: "90%", md: "72%", lg: "72%", xl: "72%" }}
                    padding="4%"
                    margin="auto"
                    marginTop="3%"
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                >
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                    >
                        <Box fontSize={{ base: "90%", sm: "95%", md: "120%", lg: "150%", xl: "150%" }}>Personal Details</Box>
                        <Box display={{ base: "flex" }} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter First name</FormLabel>
                                <Input
                                    value={checkoutState.firstName}
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    color="gray.500"
                                    placeholder='First name'
                                    onChange={(e) => setCheckoutState({ type: "firstName", payload: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter last name</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='Last name'
                                    value={checkoutState.lastName}
                                    onChange={(e) => setCheckoutState({ type: "lastName", payload: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter contact no.</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='Contact no.'
                                    value={checkoutState.contactNo}
                                    onChange={(e) => setCheckoutState({ type: "contactNo", payload: e.target.value })}
                                />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box fontSize="150%">Address Details</Box>
                        <Box display={{ base: "flex" }} width="100%" flexDirection={{ base: "column", sm: "row", md: "row", lg: "row", xl: "row" }}>
                            <FormControl w="30%" isRequired marginRight="1%">
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">House No.</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='House no.'
                                    value={checkoutState.houseNo}
                                    onChange={(e) => setCheckoutState({ type: "houseNo", payload: e.target.value })}
                                />
                            </FormControl>
                            <FormControl w="70%">
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter apartment name</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='Apartment name'
                                    value={checkoutState.apartmentName}
                                    onChange={(e) => setCheckoutState({ type: "apartmentName", payload: e.target.value })} />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box display={{ base: "flex" }} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter street details</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='Enter street details'
                                    value={checkoutState.streetDetail}
                                    onChange={(e) => setCheckoutState({ type: "streetDetail", payload: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter landmark for easy reach out</FormLabel>
                                <Input
                                    color="gray.500"
                                    fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                    placeholder='Landmark address'
                                    value={checkoutState.landMark}
                                    onChange={(e) => setCheckoutState({ type: "landMark", payload: e.target.value })}
                                />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        marginTop="3%"
                        flexDirection={{ base: "column", sm: "row", md: "row", lg: "row", xl: "row" }}
                    >
                        <FormControl marginRight="1%">
                            <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter city name</FormLabel>
                            <Input
                                color="gray.500"
                                placeholder='City name'
                                fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                value={checkoutState.cityName}
                                onChange={(e) => setCheckoutState({ type: "cityName", payload: e.target.value })}
                            />
                        </FormControl>
                        <FormControl marginRight="1%" isRequired>
                            <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Area details</FormLabel>
                            <Input
                                color="gray.500"
                                fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                placeholder='Area details'
                                value={checkoutState.areaDetails}
                                onChange={(e) => setCheckoutState({ type: "areaDetails", payload: e.target.value })}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }} color="gray.500">Enter Pincode</FormLabel>
                            <Input
                                color="gray.500"
                                fontSize={{ base: "60%", sm: "75%", md: "80%", lg: "90%", xl: "90%" }}
                                placeholder='Pincode'
                                value={checkoutState.pincode}
                                onChange={(e) => setCheckoutState({ type: "pincode", payload: e.target.value })}
                            />
                        </FormControl>
                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box color="gray.500">Choose nick name for this address</Box>
                        <Box
                            display={{ base: "flex" }}
                        >
                            <Button colorScheme={'teal'} margin="1%">Home</Button>
                            <Button colorScheme={'orange'} margin="1%">Office</Button>
                            <Button colorScheme={'green'} margin="1%">Other</Button>
                        </Box>
                        <Button
                            width="40%"
                            fontSize="100%"
                            fontWeight="bold"
                            onClick={handleSubmit}
                            colorScheme={'red'}
                        >Submit</Button>
                    </Box>
                </Box>
                <Box width={{ base: "100%", sm: "100%", md: "25%", lg: "25%", xl: "25%" }}>
                    <Box padding="5%" width="100%" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
                        <Text fontWeight="bold" color="blue">Cart value: {cartItems.filter((el) => el.cartID === userKey).length}</Text>
                        <Text fontWeight="bold" color="teal">Delivery charge: 0</Text>
                        <Text fontWeight="bold" color="red">Total:- {parseFloat(total).toFixed(2)}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { Checkout };