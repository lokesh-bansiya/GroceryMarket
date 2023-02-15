import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Image,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderedItemCard } from "../Components/OrderedItemCard";
import { getAllOrderedItems } from "../Redux/appReducer/action";
import trollyForCard from "../Assets/trollyForCard.png";

const OrderedItems = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const dispatch = useDispatch();
    const orderedItem = useSelector((store) => store.appReducer.orderedItems);
    const userKey = localStorage.getItem("userKey");

    // useEffect(() => {
    //     if (orderedItem.length === 0) {
    //         dispatch(getAllOrderedItems());
    //     }
    // }, [orderedItem, orderedItem.length, dispatch]);

    useEffect(() => {
        if (orderedItem.length === 0) {
            dispatch(getAllOrderedItems());
        }
    });

    return (
        <>
            <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                My Orders{" "}
                <span style={{ color: "darkred" }}>{orderedItem.filter((el) => el.orderID === userKey).length} Items</span>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                size={{
                    base: "xs",
                    sm: "xs",
                    md: "sm",
                    lg: "sm",
                    xl: "sm"
                }}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontWeight="bold" fontFamily="sans-serif" color="teal.800"> My Ordered Items</DrawerHeader>

                    <DrawerBody overflow="auto">
                        {orderedItem.filter((el) => el.orderID === userKey).length > 0 ? (
                            <Box>
                                {
                                    orderedItem.filter((el) => el.orderID === userKey).map((ele) => {
                                        //   orderedItem.map((ele) => {
                                        return (
                                            <OrderedItemCard
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
                        ) : (
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                fontSize="100%"
                                color="blue"
                                height="70vh"
                                flexDirection="column"
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    width="20%"
                                    margin="auto"
                                >
                                    <Image width="100%" src={trollyForCard} alt="empty..." />
                                    <Box width="100%" textAlign="center">
                                        Empty...
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { OrderedItems };
