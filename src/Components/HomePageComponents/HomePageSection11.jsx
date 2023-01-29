import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import homekitchen1 from "../../Assets/home&kitchen1.webp";
import homekitchen2 from "../../Assets/home&kitchen2.webp";
import homekitchen3 from "../../Assets/home&kitchen3.webp";
import homekitchen4 from "../../Assets/home&kitchen4.webp";
import homekitchen5 from "../../Assets/home&kitchen5.webp";
import homekitchen6 from "../../Assets/home&kitchen6.webp";

const HomePageSection11 = () => {
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
        Home and Kitchen
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
            src={homekitchen1}
            alt="brandstore1"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homekitchen2}
            alt="brandstore2"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homekitchen3}
            alt="brandstore3"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homekitchen4}
            alt="brandstore4"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homekitchen5}
            alt="brandstore5"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homekitchen6}
            alt="brandstore6"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection11 };
