import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import section61 from "../../Assets/section61.webp";
import section62 from "../../Assets/section62.webp";
import section63 from "../../Assets/section63.webp";
import section64 from "../../Assets/section64.webp";
import section65 from "../../Assets/section65.webp";
import section66 from "../../Assets/section66.webp";

const HomePageSection8 = () => {
  return (
    <Box padding="2%" width="100%" paddingTop="1%">
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
        Beverages
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
            src={section61}
            alt="section61"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section62}
            alt="section62"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section63}
            alt="section63"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section64}
            alt="section64"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section65}
            alt="section65"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section66}
            alt="section66"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection8 };
