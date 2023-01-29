import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import fruit1 from "../../Assets/fruit1.webp";
import fruit2 from "../../Assets/fruit2.webp";
import fruit3 from "../../Assets/fruit3.webp";
import fruit4 from "../../Assets/fruit4.webp";
import fruit5 from "../../Assets/fruit5.webp";
import fruit6 from "../../Assets/fruit6.webp";

const HomePageSection5 = () => {
  return (
    <Box padding="2%" width="100%" paddingTop="2%">
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
        Fruits and Vegetables
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(6,1fr)",
          lg: "repeat(6,1fr)",
          xl: "repeat(6,1fr)",
        }}
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
            src={fruit1}
            alt="fruit1"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={fruit2}
            alt="fruit2"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={fruit3}
            alt="fruit3"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={fruit4}
            alt="fruit4"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={fruit5}
            alt="fruit5"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={fruit6}
            alt="fruit6"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection5 };
