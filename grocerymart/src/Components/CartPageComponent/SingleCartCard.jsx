import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Image } from "@chakra-ui/react";
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
    return (
        <Box
            display={{ base: "flex" }}
            justifyContent="space-between"
            border="1px solid black"
            borderRadius="5px"
            padding="1%"
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
                <Box fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="bold" color="red.700" display="flex" justifyContent="center">
                    {brand}
                </Box>
            </Box>
            <Box
                display={{ base: "flex" }}
                flexDirection="column"
                justifyContent="space-between"
                width="70%"
            >
                <Box>
                    <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {name}
                    </Text>
                    {weight ? <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {weight}
                    </Text> : <></>}
                    <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {category}
                    </Text>
                    {sasta ? <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {sasta}
                    </Text> : <></>}
                    {packet ? <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {packet}
                    </Text> : <></>}
                    {offers ? <Text fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        {offers}
                    </Text> : <></>}
                    <Text display="flex" width="80%" justifyContent="space-between" fontSize={{base: "60%", sm: "70%", md: "95%", lg: "100%", xl:"110%"}} fontWeight="500">
                        <span>Price:- ₹{price}</span> {mrp ? <span className="strickPrice">MRP:- ₹{mrp} </span> : <></>}
                    </Text>
                </Box>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                >
                    <Box
                        width="20%"
                        display={{ base: "flex" }}
                        justifyContent="space-around"
                        marginTop="5%"
                    >
                        <button className="Cart_btn">−</button>
                        <button className="Cart_btn">{quantity}</button>
                        <button className="Cart_btn">+</button>
                    </Box>
                    <Box>
                        <Button border="1px solid blue" width="fit-content" margin="auto">
                            <DeleteIcon
                                // onClick={() => deleteCartItemHandler(id)}
                                fontSize="110%"
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
