import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import section41 from "../../Assets/section41.webp";
import section42 from "../../Assets/section42.webp";
import section43 from "../../Assets/section43.webp";
import section44 from "../../Assets/section44.webp";
import section45 from "../../Assets/section45.webp";
import section46 from "../../Assets/section46.webp";

const HomePageSection7 = () => {
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
        Your Daily Staples
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
            src={section41}
            alt="section41"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section42}
            alt="section42"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section43}
            alt="section43"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section44}
            alt="section44"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section45}
            alt="section45"
          />
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={section46}
            alt="section46"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection7 };
