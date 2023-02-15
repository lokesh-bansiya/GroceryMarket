import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Image, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteOrderedItems, getAllOrderedItems } from "../Redux/appReducer/action";
import "../Styles/CartPageStyles/SingleCartCard.css";

const OrderedItemCard = ({
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

    const dispatch = useDispatch();
    const toast = useToast();

    const deleteOrderedItemHandler = (id) => {

        dispatch(deleteOrderedItems(id))
            .then(() => dispatch(getAllOrderedItems()))
            .then(() => {
                const timer = setTimeout(() => {
                    var msg = localStorage.getItem("msg");
                    if (!msg) {
                      msg = "Something went wrong!";
                    }

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
                            {`${msg}!`}
                        </Box>
                    ),
                })
            }, 3000);
            return () => clearTimeout(timer);
          });
    };

    return (
        <Box
            display={{ base: "flex" }}
            justifyContent="space-between"
            border="1px solid black"
            borderRadius="5px"
            margin="3%"
            cursor="pointer"
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
                <Box width="50%" margin="auto">
                    <Image width="100%" src={ImgSrc} alt={brand} />
                </Box>
                <Box
                    fontSize={{
                        base: "50%",
                        sm: "60%",
                        md: "70%",
                        lg: "70%",
                        xl: "70%",
                    }}
                    fontWeight="bold"
                    color="blue.700"
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
                            base: "50%",
                            sm: "60%",
                            md: "70%",
                            lg: "80%",
                            xl: "80%",
                        }}
                        fontWeight="500"
                    >
                        {name}
                    </Text>
                    {weight ? (
                        <Text
                            fontSize={{
                                base: "50%",
                                sm: "50%",
                                md: "60%",
                                lg: "60%",
                                xl: "70%",
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
                            base: "50%",
                            sm: "50%",
                            md: "60%",
                            lg: "60%",
                            xl: "70%",
                        }}
                        fontWeight="500"
                    >
                        {category}
                    </Text>
                    <Text
                        display="flex"
                        width="80%"
                        justifyContent="space-between"
                        fontSize={{
                            base: "50%",
                            sm: "50%",
                            md: "60%",
                            lg: "60%",
                            xl: "70%",
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
                
            </Box>
            <Box display="block" textAlign="right">
                    <Button
                        margin="2%"
                        backgroundColor="whiteAlpha.900"
                        padding="0.1%"
                    >
                        <DeleteIcon
                            onClick={() => deleteOrderedItemHandler(id)}
                            fontSize={{
                                base: "60%",
                                sm: "70%",
                                md: "90%",
                                lg: "90%",
                                xl: "90%",
                            }}
                            color="red"
                            cursor="pointer"
                        />
                    </Button>
                </Box>
        </Box>
    );
};

export { OrderedItemCard };
