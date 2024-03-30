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
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate();
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
    alert("Registerd successfully!");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
    // navigate("/loginPage");
  };
  const [isTransformed, setIsTransformed] = useState<boolean>(false);

  const handleToggleForm = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      bg="silver"
      color="black"
      borderTopLeftRadius={"60%"}
      padding={10}
      onClick={handleToggleForm}
    >
      <FormControl>
        <Heading
          margin="60px"
          cursor="pointer"
          transition="color 0.5s, font-size 0.5s"
          transform={isTransformed ? "scale(.7)" : ""}
        >
          SignUp
        </Heading>
        <FormLabel  transform={isTransformed ? "scale(.7)" : ""}>First name</FormLabel>
        <Input
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <FormLabel  transform={isTransformed ? "scale(.7)" : ""}>Last name</FormLabel>
        <Input
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        <FormLabel  transform={isTransformed ? "scale(.7)" : ""}>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <FormLabel  transform={isTransformed ? "scale(.7)" : ""}>Password</FormLabel>
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
          _hover={{ color: "black", bg: "gray", fontSize: "larger", boxShadow: "8px 8px 8px rgb(33, 33, 33)"}}
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
