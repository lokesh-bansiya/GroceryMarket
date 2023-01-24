import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const CategoryMenu = () => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>
        Category
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

export { CategoryMenu };
