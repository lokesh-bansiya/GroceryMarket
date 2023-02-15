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
import { Link, useNavigate } from "react-router-dom";
import user from "../Assets/user.png";
import { OrderedItems } from "../Drawer/OrderedItems";
import { getCartItems } from "../Redux/cartReducer/action";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  var isAuth = localStorage.getItem("isAuth") || false;
  var username = localStorage.getItem("username");
  var email = localStorage.getItem("email");
  var adminID = localStorage.getItem("adminID");
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const userKey = localStorage.getItem("userKey") || "";
  const toast = useToast();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (userKey) {
      localStorage.clear();
      localStorage.setItem("isAuth", false);

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
      navigate("/")
    }
  };

  const change = () => {
    isAuth = localStorage.getItem("isAuth");
    console.log(isAuth);
    username = localStorage.getItem("username") || "no user";
    email = localStorage.getItem("email") || "no mail";
    adminID = localStorage.getItem("adminID");
    dispatch(getCartItems());
    return;
  }

  useEffect(() => {
    if (isAuth === false || isAuth === true) {
      if (cartItems.length === 0) {
        dispatch(getCartItems());
      }
    }
  }, [dispatch, cartItems.length, cartItems, isAuth]);

  return (
    <Menu borderRadius="10px">
      <MenuButton onClick={change}>
        <Image margin="3%" borderRadius="50%" width="100%" src={user} />
      </MenuButton>
      <MenuList
        borderRadius="10px"
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
      >
        <MenuItem>
          <Image
            borderRadius="50%"
            width="30%"
            margin="auto"
            src={user}
            alt="user img"
          />
        </MenuItem>
        {isAuth === "true" ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            {username}
          </MenuItem>
        ) : (
          <></>
        )}
        {isAuth === "true" ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            {email}
          </MenuItem>
        ) : (
          <></>
        )}
        {isAuth === "true" ? (
          <Link to="/cart"><MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
          >
            My CartItems &nbsp;{" "}
            <span
              style={{
                color: "darkred",
              }}
            >
              {" "}
              {cartItems.filter((el) => el.cartID === userKey).length} Items
            </span>
          </MenuItem></Link>
        ) : (
          <></>
        )}
        {isAuth === "true" ? (
          <MenuItem
            _hover={{ bg: "blue.300", color: "darkred" }}
            width="100%"
            display="flex"
            fontWeight={600}
            justifyContent="space-between"
          >
            {/* My Orders {0} Items */}
            <OrderedItems/>
          </MenuItem>
        ) : (
          <></>
        )}
        {isAuth === "true" ? (
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
        {isAuth === "true" ? (
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
        {adminID && isAuth === "true" ? (
          <Link to="/admin_dashboard">
            <MenuItem
              _hover={{ bg: "blue.200", color: "darkred" }}
              bg={"pink.500"}
              color="white"
              display="flex"
              fontWeight={600}
              border="2px solid green"
              width="fit-content"
              margin={"auto"}
              borderRadius="20px"
            // onClick={() => logoutHandler()}
            >
              Admin Dashboard
            </MenuItem>
          </Link>
        ) : (
          <></>
        )}
      </MenuList>
    </Menu>
  );
};

export { ProfileMenu };
