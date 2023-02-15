import { Box, Text, Image} from "@chakra-ui/react";
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
            base: "60%",
            sm: "70%",
            md: "95%",
            lg: "90%",
            xl: "90%",
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
              md: "80%",
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
          {sasta ? (
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
              {sasta}
            </Text>
          ) : (
            <></>
          )}
          {packet ? (
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
              {packet}
            </Text>
          ) : (
            <></>
          )}
          {offers ? (
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
    </Box>
  );
};

export { OrderedItemCard };
