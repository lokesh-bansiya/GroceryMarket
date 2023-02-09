import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { } from "react-bootstrap"

const Checkout = () => {
    return (
        <Box
            width="95%"
            margin="auto"
            border="1px solid red"
            display="flex"
            justifyContent="center"
            paddingTop="10%"
        >
            <Box
                display={{ base: "flex" }}
                justifyContent="center"
                flexDirection="column"
            >
                <Box
                    display={{ base: "flex" }}
                    flexDirection="column"
                >
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                    >
                        <Box fontSize="150%">Personal Details</Box>
                        <Box display={{ base: "flex" }}>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel color="gray.500">Enter First name</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel color="gray.500">Enter last name</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color="gray.500">Enter contact no.</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box fontSize="150%">Address Details</Box>
                        <Box display={{ base: "flex" }} width="100%">
                            <FormControl w="30%" isRequired marginRight="1%">
                                <FormLabel color="gray.500">House No.</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                            <FormControl w="70%">
                                <FormLabel color="gray.500">Enter apartment name</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box display={{ base: "flex" }}>
                            <FormControl isRequired marginRight="1%">
                                <FormLabel color="gray.500">Enter street details</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color="gray.500">Enter landmark for easy reach out</FormLabel>
                                <Input color="gray.500" placeholder='First name' />
                            </FormControl>
                        </Box>

                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        marginTop="3%"
                    >
                        <FormControl marginRight="1%">
                            <FormLabel color="gray.500">Enter city name</FormLabel>
                            <Input color="gray.500" placeholder='First name' />
                        </FormControl>
                        <FormControl marginRight="1%" isRequired>
                            <FormLabel color="gray.500">Area details</FormLabel>
                            <Input color="gray.500" placeholder='First name' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="gray.500">Enter Pincode</FormLabel>
                            <Input color="gray.500" placeholder='First name' />
                        </FormControl>
                    </Box>
                    <Box
                        display={{ base: "flex" }}
                        flexDirection="column"
                        marginTop="3%"
                    >
                        <Box color="gray.500">Choose nick name for this address</Box>
                        <Box
                            display={{ base: "flex" }}
                        >
                            <Button margin="1%">Home</Button>
                            <Button margin="1%">Office</Button>
                            <Button margin="1%">Other</Button>
                        </Box>
                    </Box>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
};

export { Checkout };