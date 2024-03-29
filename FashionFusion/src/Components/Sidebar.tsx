"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
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
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { IconType } from "react-icons";
import FusionLogo from "../assets/FashionFusionLogo.png";
import DarkFusionLogo from "../assets/FashionFusionDarkLogo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "black")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "black")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {colorMode === "light" ? (
          <Image
            width="120px"
            height="43.2px"
            objectFit="cover"
            src={FusionLogo}
            alt="Fashion Fusion Logo"
            backgroundColor="red"
          />
        ) : (
          <Image
            width="120px"
            height="43px"
            objectFit="cover"
            src={DarkFusionLogo}
            alt="Fashion Fusion Logo"
          />
        )}

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          //   bg: "cyan.400",
          bg: "gray.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};


const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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
                  <Text fontSize="sm">Justina Clark</Text>
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
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
