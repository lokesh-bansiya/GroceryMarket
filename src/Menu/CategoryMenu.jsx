import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ onClose }) => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>Category</MenuButton>
      <MenuList boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
        <Link to="/bakery">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Bakery and Bread
          </MenuItem>
        </Link>
        <Link to="/nonveg">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Meat and Seafood
          </MenuItem>
        </Link>
        <Link to="/bakery">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Pasta and Rice
          </MenuItem>
        </Link>
        <Link to="/products">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Oils, Sauces, Salad Dressings, and Condiments
          </MenuItem>
        </Link>
        <Link to="/vegetables">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Cereals and Breakfast Foods
          </MenuItem>
        </Link>
        <Link to="/bakery">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Frozen Foods
          </MenuItem>
        </Link>
        <Link to="/bakery">
          <MenuItem
            onClick={onClose}
            _hover={{ bg: "gray.200", color: "darkred" }}
          >
            Dairy, Cheese, and Eggs
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export { CategoryMenu };
