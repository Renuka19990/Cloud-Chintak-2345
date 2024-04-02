"use client";

import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Button,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import FusionLogo from "../assets/FashionFusionLogo.png";
import DarkFusionLogo from "../assets/FashionFusionDarkLogo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNavAdmin = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "black")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "black")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      {colorMode === "light" ? (
        <Image
          display={{ base: "flex", md: "none" }}
          width="89.3px"
          height="32px"
          objectFit="cover"
          src={FusionLogo}
          alt="Fashion Fusion Logo"
        />
      ) : (
        <Image
          display={{ base: "flex", md: "none" }}
          width="89.3px"
          height="32.7px"
          objectFit="cover"
          src={DarkFusionLogo}
          alt="Fashion Fusion Logo"
        />
      )}

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex h="100vh" justifyContent="center" alignItems="center">
          {isLargeScreen ? (
            <InputGroup marginRight="5px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input
                focusBorderColor={colorMode === "light" ? "gray.700" : "white"}
                type="text"
                placeholder="Search..."
              />
            </InputGroup>
          ) : (
            <IconButton
              aria-label="Search database"
              variant="ghost"
              size="md"
              icon={<SearchIcon />}
            />
          )}

          <IconButton
            size="md"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            variant="ghost"
            w="fit-content"
            size="md"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Flex>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Renuka Jagarwal</Text>
                  {/* <Text fontSize="xs" color="gray.600"> */}
                  <Text
                    fontSize="xs"
                    color={colorMode === "light" ? "gray.600" : "white"}
                  >
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.700")}
              borderColor={useColorModeValue("gray.200", "white.200")}
            >
              <MenuItem
                _hover={{
                  bg: "gray.300",
                  color: "white",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "gray.300",
                  color: "white",
                }}
              >
                Settings
              </MenuItem>

              <MenuItem
                _hover={{
                  bg: "gray.300",
                  color: "white",
                }}
              >
                <NavLink to="/loginPage">Sign out</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
