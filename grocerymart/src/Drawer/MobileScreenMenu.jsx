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
          <DrawerCloseButton
            paddingTop="8%"
            paddingRight="5%"
            fontSize="150%"
          />
          <DrawerHeader borderBottomWidth="1px">
            <Box width="30%">
              <Image width="100%" src={logo} />
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box>
                <ProductsMenu />
              </Box>
              <Box>
                <CategoryMenu />
              </Box>
              <Box fontWeight={"bold"}>Cart</Box>
              <Box fontWeight={"bold"} onClick={onClose}>
                Cancel
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
