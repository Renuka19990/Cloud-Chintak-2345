import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      bgGradient="linear(gray.300, gray.500, black)"
    >
      <Box
        width="550px"
        height="660px"
        bg="black"
        borderRadius="40px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="relative"
        overflow="hidden"
      >
        <Box
          transition="transform 0.5s ease-in-out"
          transform={showLogin ? "translateY(0)" : "translateY(-100%)"}
          height="100%"
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="2"
        >
          <Login />
        </Box>
        <Box
          transition="transform 0.5s ease-in-out"
          transform={showLogin ? "translateY(100%)" : "translateY(0)"}
          height="100%"
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="1"
        >
          <Signup />
        </Box>
        <Button
          onClick={handleToggleForm}
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="3"
          bg="white"
          borderRadius="20px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          {showLogin ? "Create a new Account" : "Already have an Account"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
