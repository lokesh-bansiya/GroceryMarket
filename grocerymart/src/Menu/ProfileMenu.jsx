import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import user from "../Assets/user.png";
import { getProfile } from "../Redux/authReducer/action";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.authReducer.userProfile);
  const userKey = localStorage.getItem("userKey") || "";
  const toast = useToast();

  const logoutHandler = () => {
    if (userKey) {
      localStorage.removeItem("userKey");
      localStorage.remoreItem("adminID");
      localStorage.removeItem("token");
      toast({
        title: "User signed up!",
        description: "We've added your product.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
        render: () => (
          <Box
            border="2px solid green"
            textAlign="center"
            borderRadius="10px"
            fontWeight="bolder"
            color="white"
            p={3}
            bg="blue.500"
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            {`Successfully loged out!`}
          </Box>
        ),
      });
    }
  };

  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getProfile(userKey));
    }
  }, [userKey, userProfile.length, dispatch]);

  return (
    <Menu borderRadius="10px">
      <MenuButton>
        <Image margin="3%" borderRadius="50%" width="100%" src={user} />
      </MenuButton>
      <MenuList borderRadius="10px" boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset">
        <MenuItem>
          <Image
            borderRadius="50%"
            width="30%"
            margin="auto"
            src={user}
            alt="user img"
          />
        </MenuItem>
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            {userProfile.username}
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            {userProfile.email}
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
            justifyContent="space-between"
          >
            My CartItems {0} Items
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
            justifyContent="space-between"
          >
            My Orders {0} Items
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            Edit
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
            onClick={() => logoutHandler()}
          >
            Logout
          </MenuItem>
        ) : (
          <></>
        )}
        {userProfile.adminID ? (
          <Link to="/admin_dashboard"><MenuItem
            _hover={{ bg: "blue.200", color: "darkred" }}
            bg={"pink.500"}
            color="white"
            display="flex"
            fontWeight={600}
            border="2px solid green"
            width="fit-content"
            margin={'auto'}
            borderRadius="20px"
            // onClick={() => logoutHandler()}
          >
            Admin Dashboard
          </MenuItem></Link>
        ) : (
          <></>
        )}
      </MenuList>
    </Menu>
  );
};

export { ProfileMenu };
