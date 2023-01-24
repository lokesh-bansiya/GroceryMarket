import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const ProductsMenu = () => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>
        Products
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export { ProductsMenu };
