import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Collapse,
  Image,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import footer_logo from "../Assets/redbaglogosmall.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appStore from "../Assets/appStore.png";
import googlePlay from "../Assets/googlePlay.webp";

const Footer = () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);

  const handleToggle1 = () => setShow1(!show1);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);

  return (
    <Box>
      <Box width="90%" margin="auto" marginTop="3%" marginBottom="2%">
        <Flex justifyContent="space-between">
          <Box
            width={{ base: "20%", sm: "20%", md: "60%", lg: "60%", xl: "60%" }}
          >
            <Flex>
              <Box
                margin="1%"
                width={{
                  base: "60%",
                  sm: "50%",
                  md: "10%",
                  lg: "10%",
                  xl: "10%",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="4px"
                border="1px solid red"
              >
                <Image src={footer_logo} width="100%" />
              </Box>
              <Box
                margin="2%"
                width="fit-content"
                cursor="pointer"
                fontWeight="500"
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                justifyContent="center"
                alignItems="center"
                fontSize={{
                  base: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "100%",
                  xl: "100%",
                }}
              >
                Brands
              </Box>
              <Box
                margin="2%"
                width="fit-content"
                cursor="pointer"
                fontWeight="500"
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                justifyContent="center"
                alignItems="center"
                fontSize={{
                  base: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "100%",
                  xl: "100%",
                }}
              >
                Category
              </Box>
              <Box
                margin="2%"
                width="fit-content"
                cursor="pointer"
                fontWeight="500"
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                justifyContent="center"
                alignItems="center"
                fontSize={{
                  base: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "100%",
                  xl: "100%",
                }}
              >
                Price
              </Box>
              <Box
                margin="2%"
                width="fit-content"
                cursor="pointer"
                fontWeight="500"
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                justifyContent="center"
                alignItems="center"
                fontSize={{
                  base: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "100%",
                  xl: "100%",
                }}
              >
                Offers
              </Box>
              <Box
                margin="2%"
                width="fit-content"
                cursor="pointer"
                fontWeight="500"
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
                justifyContent="center"
                alignItems="center"
                fontSize={{
                  base: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "100%",
                  xl: "100%",
                }}
              >
                Contact
              </Box>
            </Flex>
          </Box>
          <Box
            width={{ base: "40%", sm: "40%", md: "40%", lg: "25%", xl: "25%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Flex>
              <Box margin="4%" w="100%" cursor="pointer">
                <FontAwesomeIcon
                  _hover={{ color: "blue" }}
                  icon={faFacebook}
                  size="1x"
                />
              </Box>
              <Box margin="4%" w="100%" cursor="pointer">
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
              </Box>
              <Box margin="4%" w="100%" cursor="pointer">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Box>
              <Box margin="4%" w="100%" cursor="pointer">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Box>
              <Box margin="4%" w="100%" cursor="pointer">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box width="100%" marginBottom="3%" borderTop="2px solid gray"></Box>
      <Grid
        templateColumns={{
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        display={{
          base: "none",
          sm: "grid",
          md: "grid",
          lg: "grid",
          xl: "grid",
        }}
        width="90%"
        margin="auto"
        gap={6}
      >
        <GridItem w="100%" paddingLeft="5%">
          <Box textAlign="left">
            <Collapse startingHeight={212} in={show1}>
              <Text
                color="#3e3f42"
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
                fontWeight="700"
              >
                Popular Brands
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
               Sensodyne
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Vaseline
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                STAYFREE
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Dettol
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Ocean Secret
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Fresho
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Prasuma
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                ABHI EGGS
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Britannia
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Amul
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Sunsilk
              </Text>
            </Collapse>
            <Text
              fontWeight="500"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
              cursor="pointer"
              onClick={handleToggle1}
            >
              Show {show1 ? "Less" : "More"}
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" paddingLeft="5%">
          <Box textAlign="left">
            <Collapse startingHeight={212} in={show2}>
              <Text
                color="#3e3f42"
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
                fontWeight="700"
              >
                Popular Items
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Chicken
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Palmyra Sprouts
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Skin Deodorant
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Liquid Handwash
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Lettuce - Iceberg
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Fragrant Talc
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Pomegranate 
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Baby Potato
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Colocasia (Loose)
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Knol Khol (Loose)
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Treat Croissant
              </Text>
            </Collapse>
            <Text
              fontWeight="500"
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
              onClick={handleToggle2}
            >
              Show {show2 ? "Less" : "More"}
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" paddingLeft="5%">
          <Box textAlign="left">
            <Collapse startingHeight={212} in={show3}>
              <Text
                color="#3e3f42"
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
                fontWeight="700"
              >
                Popular Solutions
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Marketing
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Product Operations
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Human Resources
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Sales
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Operations
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Content Operations
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Beans
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Organically Grown
              </Text>
            </Collapse>
            <Text
              fontWeight="500"
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
              onClick={handleToggle3}
            >
              Show {show3 ? "Less" : "More"}
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" paddingLeft="5%">
          <Box textAlign="left">
            <Collapse startingHeight={212} in={show4}>
              <Text
                color="#3e3f42"
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
                fontWeight="700"
              >
                More about products
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Sensodyne <Badge colorScheme="blue">POPULAR</Badge>
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Demos <Badge colorScheme="green">NEW</Badge>
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Guides
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Articles
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Community
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Support
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                eBooks
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Quick Reads
              </Text>
              <Text
                cursor="pointer"
                margin={{
                  base: "10%",
                  sm: "4%",
                  md: "4%",
                  lg: "10%",
                  xl: "10%",
                }}
              >
                Reports
              </Text>
            </Collapse>
            <Text
              fontWeight="500"
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
              onClick={handleToggle4}
            >
              Show {show4 ? "Less" : "More"}
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" paddingLeft="5%">
          <Box textAlign="left">
            <Text
              color="#3e3f42"
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
              fontWeight="700"
            >
              Categories
            </Text>
            <Text
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
            >
              Non-veg
            </Text>
            <Text
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
            >
              Bakery <Badge colorScheme="blue">POPULAR</Badge>
            </Text>
            <Text
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
            >
              Beauty
            </Text>
            <Text
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
            >
              Vegetables
            </Text>
            <Text
              cursor="pointer"
              margin={{ base: "10%", sm: "4%", md: "4%", lg: "10%", xl: "10%" }}
            >
              Mushroom
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Small Screen Footer  */}

      <Box
        display={{
          base: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  color="#383a3d"
                  margin="2%"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Popular Brands
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign="left" pb={4}>
              <Text cursor="pointer" margin="2%">
                Sensodyne
              </Text>
              <Text cursor="pointer" margin="2%">
                Vaseline
              </Text>
              <Text cursor="pointer" margin="2%">
                Stayfree
              </Text>
              <Text cursor="pointer" margin="2%">
                Dettol
              </Text>
              <Text cursor="pointer" margin="2%">
                Ocean Secret
              </Text>
              <Text cursor="pointer" margin="2%">
                Fresho
              </Text>
              <Text cursor="pointer" margin="2%">
                Prasuma
              </Text>
              <Text cursor="pointer" margin="2%">
                Abhi Eggs
              </Text>
              <Text cursor="pointer" margin="2%">
                Britannia
              </Text>
              <Text cursor="pointer" margin="2%">
                Amul
              </Text>
              <Text cursor="pointer" margin="2%">
                Sunsilk
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  color="#383a3d"
                  margin="2%"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Popular Items
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign="left" pb={4}>
              <Text cursor="pointer" margin="2%">
                Chicken
              </Text>
              <Text cursor="pointer" margin="2%">
                Skin Deodorant
              </Text>
              <Text cursor="pointer" margin="2%">
                Liquid Hnadwash
              </Text>
              <Text cursor="pointer" margin="2%">
                Lettuce Iceberg
              </Text>
              <Text cursor="pointer" margin="2%">
                Palmyra Sproutes
              </Text>
              <Text cursor="pointer" margin="2%">
                Fragnant Talc
              </Text>
              <Text cursor="pointer" margin="2%">
                Pomegranate
              </Text>
              <Text cursor="pointer" margin="2%">
                Baby Potato
              </Text>
              <Text cursor="pointer" margin="2%">
                Calocasia
              </Text>
              <Text cursor="pointer" margin="2%">
                Knol-Knol
              </Text>
              <Text cursor="pointer" margin="2%">
                Treat crossant
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  color="#383a3d"
                  margin="2%"
                  cursor="pointer"
                  fontWeight="bold"
                >
                  Popular Solutions
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign="left" pb={4}>
              <Text cursor="pointer" margin="2%">
                Marketing
              </Text>
              <Text cursor="pointer" margin="2%">
                Product Operations
              </Text>
              <Text cursor="pointer" margin="2%">
                Human Resources
              </Text>
              <Text cursor="pointer" margin="2%">
                Sales
              </Text>
              <Text cursor="pointer" margin="2%">
                Operations
              </Text>
              <Text cursor="pointer" margin="2%">
                Content Operations
              </Text>
              <Text cursor="pointer" margin="2%">
                Finance
              </Text>
              <Text cursor="pointer" margin="2%">
                See all solutions
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  color="#383a3d"
                  margin="2%"
                  cursor="pointer"
                  fontWeight="bold"
                >
                  Learn More
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign="left" pb={4}>
              <Text cursor="pointer" margin="2%">
                About <Badge colorScheme="blue">POPULAR</Badge>
              </Text>
              <Text cursor="pointer" margin="2%">
                Demos <Badge colorScheme="green">NEW</Badge>
              </Text>
              <Text cursor="pointer" margin="2%">
                Guides
              </Text>
              <Text cursor="pointer" margin="2%">
                Articles
              </Text>
              <Text cursor="pointer" margin="2%">
                Community
              </Text>
              <Text cursor="pointer" margin="2%">
                Support
              </Text>
              <Text cursor="pointer" margin="2%">
                eBooks
              </Text>
              <Text cursor="pointer" margin="2%">
                Quick Reads
              </Text>
              <Text cursor="pointer" margin="2%">
                Reports
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  color="#383a3d"
                  margin="2%"
                  cursor="pointer"
                  fontWeight="bold"
                >
                  Categories
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign="left" pb={4}>
              <Text cursor="pointer" margin="2%">
                Nonveg
              </Text>
              <Text cursor="pointer" margin="2%">
                Mushroom <Badge colorScheme="blue">POPULAR</Badge>
              </Text>
              <Text cursor="pointer" margin="2%">
                Beauty
              </Text>
              <Text cursor="pointer" margin="2%">
                Bakery
              </Text>
              <Text cursor="pointer" margin="2%">
                Vegetables
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box textAlign="left" marginTop="5%">
          <Grid width="90%" margin="auto" templateColumns="repeat(1, 1fr)">
            <GridItem marginLeft="2%" w="100%" h="10" fontWeight="600">
              <Text cursor="pointer">Product</Text>
            </GridItem>
            <GridItem marginLeft="2%" w="100%" h="10" fontWeight="600">
              <Text cursor="pointer">Solutions</Text>
            </GridItem>
            <GridItem marginLeft="2%" w="100%" h="10" fontWeight="600">
              <Text cursor="pointer">Pricing</Text>
            </GridItem>
            <GridItem marginLeft="2%" w="100%" h="10" fontWeight="600">
              <Text cursor="pointer">Enterprise</Text>
            </GridItem>
            <GridItem marginLeft="2%" w="100%" h="10" fontWeight="600">
              <Text cursor="pointer">Contact Sales</Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Box width="100%" backgroundColor="#e6eef7" padding="1%">
        <Box
          display="flex"
          width="90%"
          margin="auto"
          justifyContent="space-between"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
        >
          <Box
            display="flex"
            marginBottom="3%"
            marginTop="3%"
            justifyContent="space-between"
            width={{ base: "100%", sm: "60%", md: "40%", lg: "30%", xl: "60%" }}
          >
            <Box>
              <Text cursor="pointer" fontWeight={500}>
                Security
              </Text>
            </Box>
            <Box>
              <Text cursor="pointer" fontWeight={500}>
                API
              </Text>
            </Box>
            <Box>
              <Text cursor="pointer" fontWeight={500}>
                Sitemap
              </Text>
            </Box>
            <Box>
              <Text cursor="pointer" fontWeight={500}>
                Privacy
              </Text>
            </Box>
            <Box>
              <Text cursor="pointer" fontWeight={500}>
                Terms
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            width={{ base: "50%", sm: "30%", md: "30%", lg: "30%", xl: "30%" }}
          >
            <Image cursor="pointer" width="40%" height="50%" src={googlePlay} />
            <Image cursor="pointer" width="40%" height="50%" src={appStore} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
