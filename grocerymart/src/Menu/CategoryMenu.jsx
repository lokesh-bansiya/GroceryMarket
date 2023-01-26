import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const CategoryMenu = () => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>
        Category
      </MenuButton>
      <MenuList boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Bakery and Bread</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Meat and Seafood</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Pasta and Rice</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Oils, Sauces, Salad Dressings, and Condiments</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Cereals and Breakfast Foods</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Soups and Canned Goods</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Frozen Foods</MenuItem>
        <MenuItem _hover={{ bg: "gray.200", color: "darkred" }}>Dairy, Cheese, and Eggs</MenuItem>
      </MenuList>
    </Menu>
  );
};

export { CategoryMenu };
