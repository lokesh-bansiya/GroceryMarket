import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import homesectiontwoimg1 from "../../Assets/homesectiontwoimg1.webp";
import homesectiontwoimg2 from "../../Assets/homesectiontwoimg2.webp";
import homesectiontwoimg3 from "../../Assets/homesectiontwoimg3.webp";
import homesectiontwoimg4 from "../../Assets/homesectiontwoimg4.webp";
import homesectiontwoimg5 from "../../Assets/homesectiontwoimg5.webp";
import homesectiontwoimg6 from "../../Assets/homesectiontwoimg6.webp";

const HomePageSection2 = () => {
  return (
    <Box padding="2%" width="100%" paddingTop="5%" paddingBottom="1%">
      <Grid
        gridTemplateColumns={{ base: "repeat(6,1fr)" }}
        gap="2%"
        width="100%"
        margin="auto"
      >
        <GridItem>
          <Image
            borderRadius="7px"
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg1}
            alt="homesectiontwoimg1"
          />
        </GridItem>
        <GridItem>
          <Image
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg2}
            alt="homesectiontwoimg2"
          />
        </GridItem>
        <GridItem>
          <Image
            borderRadius="7px"
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg3}
            alt="homesectiontwoimg3"
          />
        </GridItem>
        <GridItem>
          <Image
            borderRadius="7px"
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg4}
            alt="homesectiontwoimg4"
          />
        </GridItem>
        <GridItem>
          <Image
            borderRadius="7px"
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg5}
            alt="homesectiontwoimg5"
          />
        </GridItem>
        <GridItem>
          <Image
            borderRadius="7px"
            _hover={{
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            src={homesectiontwoimg6}
            alt="homesectiontwoimg6"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { HomePageSection2 };
