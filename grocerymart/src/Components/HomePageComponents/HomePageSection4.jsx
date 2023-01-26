// HomePageSection4
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import offer1 from "../../Assets/offer1.webp";
import offer2 from "../../Assets/offer2.webp";
import offer3 from "../../Assets/offer3.webp";
import offer4 from "../../Assets/offer4.webp";

const HomePageSection4 = () => {
  return (
    <Box padding="2%" width="100%" paddingTop="5%">
      <Box
        width="100%"
        margin="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="120%"
        padding="3%"
        fontWeight="bold"
        color="gray.600"
      >
        Top Offers
      </Box>
      <Grid
        gridTemplateColumns={{ base: "repeat(4,1fr)" }}
        gap="2%"
        width="100%"
        margin="auto"
      >
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={offer1}
            alt="offer1"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={offer2}
            alt="offer2"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={offer3}
            alt="offer3"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={offer4}
            alt="offer4"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection4 };
