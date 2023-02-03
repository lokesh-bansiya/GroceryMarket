import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../Assets/redbaglogosmall.png";
import Login from "./Login";
import { signUp } from "../Redux/authReducer/action";
import { useNavigate } from "react-router-dom";

const initialSignUpState = {
  username: "",
  email: "",
  password: "",
  mobileNo: "",
};

const signUpReducer = (state, action) => {
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "mobileNo":
      return {
        ...state,
        mobileNo: action.payload,
      };
    default:
      return state;
  }
};

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [info, setInfo] = useState("user");
  const navigate = useNavigate();

  const [userState, setUserState] = useReducer(
    signUpReducer,
    initialSignUpState
  );
  const dispatch = useDispatch();
  const toast = useToast();

  const signUpHandler = () => {
    if (
      userState.username &&
      userState.email &&
      userState.mobileNo &&
      userState.password
    ) {
      dispatch(signUp(info, userState));
      const timer = setTimeout(() => {
        var msg = localStorage.getItem("msg");
        if (!msg) {
          msg = "Something went wrong!";
        }
        toast({
          title: "User signed up!",
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
              {`${msg}`}
            </Box>
          ),
        });
        onClose();
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      toast({
        title: "Error!",
        description: "Something went wrong.",
        status: "warning",
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
            bg="red.500"
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            {`All fields are not there !`}
          </Box>
        ),
      });
    }
  };

  return (
    <>
      <Button
        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
        bg={"pink.500"}
        onClick={onOpen}
        color="white"
        _hover={{ bg: "pink.400" }}
      >
        Sign up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Box width="40%" padding="5%" paddingBottom={0}>
            <Image width="100%" src={logo} />
          </Box>
          <ModalHeader fontWeight="bold" color={"darkgreen"}>
            Create your account
          </ModalHeader>
          <ModalCloseButton marginTop="8%" marginRight="5%" fontSize="150%" />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input
                type={"text"}
                placeholder="username"
                value={userState.username}
                onChange={(e) =>
                  setUserState({ type: "username", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                placeholder="email id"
                value={userState.email}
                onChange={(e) =>
                  setUserState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                value={userState.password}
                onChange={(e) =>
                  setUserState({ type: "password", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mobile no.</FormLabel>
              <Input
                type={"text"}
                placeholder="Mobile no"
                value={userState.mobileNo}
                onChange={(e) =>
                  setUserState({ type: "mobileNo", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Admin/User</FormLabel>
              <Select
                placeholder="user type"
                value={info}
                onChange={(e) => setInfo(() => e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Box>
              <Button
                colorScheme="blue"
                fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                mr={3}
                onClick={() => signUpHandler()}
              >
                Sign Up
              </Button>
            </Box>
            <Box display="flex" justifyContent="space-around" width="50%">
              <Login />
              <Button
                onClick={onClose}
                fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
              >
                Cancel
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
