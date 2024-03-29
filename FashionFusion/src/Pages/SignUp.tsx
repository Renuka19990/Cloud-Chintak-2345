import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

async function postUsers(url: string, cred: FormData) {
  try {
    let res = await axios.post(url, cred);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

const Signup: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof FormData
  ) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSignup = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postUsers("https://mock-server-app-1.onrender.com/users", form);
    console.log(form);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      bg="silver" // Set background color to black
      color="black" // Set text color to white
      borderTopLeftRadius={"60%"}
      padding={10}
    >
      <FormControl>
        <Heading
          margin="60px"
          cursor="pointer"
          transition="color 0.5s, font-size 0.5s"
        >
          SignUp
        </Heading>
        <FormLabel>First name</FormLabel>
        <Input
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <FormLabel>Last name</FormLabel>
        <Input
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <Button
          transition=".2s ease-in"
          cursor="pointer"
          onClick={handleSignup}
          bg="black"
          _hover={{ color: "black", bg: "gray", fontSize: "larger" }}
          color="white"
          marginTop={10}
        >
          SignUp
        </Button>
      </FormControl>
    </Box>
  );
};

export default Signup;
