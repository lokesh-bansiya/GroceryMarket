import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../Assets/user.png";
import { getProfile } from "../Redux/authReducer/action";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.authReducer.userProfile);
  const userKey = localStorage.getItem("userKey");

  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getProfile(userKey));
    }
  }, [userKey, userProfile.length]);

  return (
    <Menu borderRadius="10px">
      <MenuButton>
        <Image margin="3%" borderRadius="50%" width="100%" src={user} />
      </MenuButton>
      <MenuList bg={'blue.200'} borderRadius="10px">
        <MenuItem bg={'blue.200'}>
          <Image borderRadius="50%" width="30%" margin="auto" src={user} />
        </MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'}  width="100%" display="flex" fontWeight={600}>{userProfile.username}</MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'}  width="100%" display="flex" fontWeight={600} >{userProfile.email}</MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'}  width="100%" display="flex" fontWeight={600}  justifyContent="space-between">My CartItems  {0} Items</MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'}  width="100%" display="flex" fontWeight={600} justifyContent="space-between">My Orders  {0} Items</MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'}  width="100%" display="flex" fontWeight={600} >Edit</MenuItem>
        <MenuItem _hover={{bg:"blue.300", color:"darkred"}} bg={'blue.200'} width="100%" display="flex" fontWeight={600} >Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export { ProfileMenu };
