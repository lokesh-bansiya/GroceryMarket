import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/redbaglogosmall.png";
import { CategoryMenu } from "../Menu/CategoryMenu";
import { ProductsMenu } from "../Menu/ProductsMenu";

export default function MobileScreenMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button color="teal" onClick={onOpen}>
        <HamburgerIcon fontSize="150%" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"xs"}
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginTop="8%" marginRight="5%" fontSize="150%" />
          <DrawerHeader borderBottomWidth="1px">
            <Box width="30%">
              <Image width="100%" src={logo} />
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box
                padding="2%"
                borderRadius="5px"
                _hover={{ bg: "blue.100", color: "darkred" }}
              >
                <ProductsMenu onClose={onClose}/>
              </Box>
              <Box
                padding="2%"
                borderRadius="5px"
                _hover={{ bg: "blue.100", color: "darkred" }}
              >
                <CategoryMenu onClose={onClose}/>
              </Box>
              <Box
                padding="2%"
                borderRadius="5px"
                _hover={{ bg: "blue.100", color: "darkred" }}
                fontWeight={"bold"}
                onClick={onClose}
              >
                <Link to="/cart">Cart</Link>
              </Box>
              <Box
                padding="2%"
                borderRadius="5px"
                _hover={{ bg: "blue.100", color: "darkred" }}
                fontWeight={"bold"}
                onClick={onClose}
              >
                Cancel
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
