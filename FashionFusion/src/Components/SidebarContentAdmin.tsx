"use client";

import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  BoxProps,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import { IconType } from "react-icons";
import FusionLogo from "../assets/FashionFusionLogo.png";
import DarkFusionLogo from "../assets/FashionFusionDarkLogo.png";

import { NavLink } from "react-router-dom";
import { NavItemAdmin } from "./NavItemAdmin";
interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Trending", icon: FiTrendingUp, path: "/trending" },
  { name: "Products", icon: FiCompass, path: "/adminProduct" },
  { name: "Favourites", icon: FiStar, path: "/favourite" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];
export const SidebarContentAdmin = ({ onClose, ...rest }: SidebarProps) => {
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
        <NavLink to={link.path} key={link.name}>
          <NavItemAdmin key={link.name} icon={link.icon}>
            {link.name}
          </NavItemAdmin>
        </NavLink>
      ))}
    </Box>
  );
};