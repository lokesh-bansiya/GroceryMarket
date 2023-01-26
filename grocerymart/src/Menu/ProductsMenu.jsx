import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const ProductsMenu = () => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>
        Products
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ bg: "blue.300", color: "darkred" }}>Download</MenuItem>
        <MenuItem _hover={{ bg: "blue.300", color: "darkred" }}>Create a Copy</MenuItem>
        <MenuItem _hover={{ bg: "blue.300", color: "darkred" }}>Mark as Draft</MenuItem>
        <MenuItem _hover={{ bg: "blue.300", color: "darkred" }}>Delete</MenuItem>
        <MenuItem _hover={{ bg: "blue.300", color: "darkred" }}>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export { ProductsMenu };