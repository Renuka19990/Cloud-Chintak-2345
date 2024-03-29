import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { login, loginSuccess } from "../Redux/action";
import { RootState } from "../types"; // Assuming RootState type is defined in a separate file
// import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("login success");

    if (form.email === "admin@admin.com" && form.password === "admin") {
      const Admin = [
        {
          firstName: "Admin",
          email: form.email,
          password: form.password,
        },
      ];
      dispatch(loginSuccess(Admin));
      // navigate("/admin");
    } else {
      dispatch(login(form.email, form.password));
    }
  };

  const [isTransformed, setIsTransformed] = useState<boolean>(false);

  const handleToggleForm = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <Box
      height={"100%"}
      bg={"silver"}
      borderBottomEndRadius={"70%"}
      transition=".8s ease-in-out"
      onClick={handleToggleForm}
      padding={10}
      color={"Black"}
    >
      <FormControl>
        <Heading transform={isTransformed ? "scale(.6)" : ""}>Login</Heading>
        <FormLabel transform={isTransformed ? "scale(.6)" : ""}>
          Email
        </FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormLabel transform={isTransformed ? "scale(.6)" : ""}>
          Password
        </FormLabel>
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button
          onClick={handleLogin}
          marginTop={10}
          bg="black"
          _hover={{ color: "black", bg: "gray", fontSize: "larger" }}
          color="white"
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
