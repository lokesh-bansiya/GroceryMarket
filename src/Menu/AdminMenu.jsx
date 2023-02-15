import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <Menu>
      <MenuButton>Panel</MenuButton>
      <MenuList zIndex={1000} bg={"black"}>
        <Link to="/admin_dashboard">
          <MenuItem bg={"black"} _hover={{ bg: "blue.300", color: "darkred" }}>
            Dashboard
          </MenuItem>
        </Link>
        <Link to="/admin_side_admins">
          <MenuItem bg={"black"} _hover={{ bg: "blue.300", color: "darkred" }}>
            Admins
          </MenuItem>
        </Link>
        <Link to="/admin_side_products">
          <MenuItem bg={"black"} _hover={{ bg: "blue.300", color: "darkred" }}>
            Products
          </MenuItem>
        </Link>
        <Link to="/admin_side_users">
          <MenuItem bg={"black"} _hover={{ bg: "blue.300", color: "darkred" }}>
            Users
          </MenuItem>
        </Link>
        <Link to="/admin_side_add_product">
          <MenuItem bg={"black"} _hover={{ bg: "blue.300", color: "darkred" }}>
            Add Product
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export { AdminMenu };
