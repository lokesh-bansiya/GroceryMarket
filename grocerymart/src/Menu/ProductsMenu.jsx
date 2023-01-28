import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductsMenu = ({onClose}) => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>Products</MenuButton>
      <MenuList boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
        <Link to="/products">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            All Products
          </MenuItem>
        </Link>
        <Link to="/beauty">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            Beauty Products
          </MenuItem>
        </Link>
        <Link to="/nonveg">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            Non-veg
          </MenuItem>
        </Link>
        <Link to="/vegetables">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            Vegetables
          </MenuItem>
        </Link>
        <Link to="/bakery">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            Bakery Items
          </MenuItem>
        </Link>
        <Link to="/products">
          <MenuItem onClick={onClose} _hover={{ bg: "gray.200", color: "darkred" }}>
            Different Brands
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export { ProductsMenu };
