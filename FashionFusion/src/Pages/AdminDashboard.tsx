import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  Grid,
  GridItem,
  Spinner,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import {
  getKidData,
  getMenData,
  getUserData,
  getWomenData,
} from "../Redux/adminDataReducer/reducer";

interface AdminDashboardProps {}
const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Fetch store
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const menUrl = `https://mock-server-app-1.onrender.com/mens`;
    dispatch(getMenData(menUrl));
    const womenUrl = `https://mock-server-app-1.onrender.com/womens`;
    dispatch(getWomenData(womenUrl));
    const kidsUrl = `https://mock-server-app-1.onrender.com/kids`;
    dispatch(getKidData(kidsUrl));
    const userUrl = `https://mock-server-app-1.onrender.com/users`;
    dispatch(getUserData(userUrl));
  }, []);

  // let { isLoading, isError, mensProducts, womenProducts, kidsProducts, users } =
  //   useSelector((store) => store.Products);
  const {
    isLoading,
    isError,
    mensProducts,
    womenProducts,
    kidsProducts,
    users,
  } = useSelector((store: RootState) => store.Products);

  useEffect(() => {
    console.log(mensProducts);
  }, [mensProducts]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContentAdmin
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
          <SidebarContentAdmin onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <MobileNavAdmin onOpen={onOpen} pos="sticky" top="0px" />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
    <center><Text fontSize="xl" fontWeight="bold">
          Dashboard
        </Text></center>
        
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
        >
         

          {/* <GridItem w="100%" h="10" bg="blue.500">
            {!isLoading && !isError && (
              <div>Women data length:{womenProducts.length}</div>
            )}
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            {!isLoading && !isError && (
              <div>Kid data length:{kidsProducts.length}</div>
            )}
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            {!isLoading && !isError && (
              <div>User data length:{users.length}</div>
            )}
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            Hello World
          </GridItem> */}
        </Grid>
        

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          m="16px 25px 16px 25px"
        >
          <GridItem colSpan={1}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              Total Women's Products
              {/* Place your data here */}
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              Total Users
              {/* Place your data here */}
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              Total Kids' Products
              {/* Place your data here */}
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="md"bgColor={useColorModeValue("white", "black")}>
              Total Orders
              {/* Place your data here */}
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="md"bgColor={useColorModeValue("white", "black")}>
              Product Sale
              {/* Place your data here */}
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="md"bgColor={useColorModeValue("white", "black")}>
              Product Sale
              {/* Place your data here */}
            </Box>
          </GridItem>
        </Grid>
        <div>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error...</div>}
          {/* {!isLoading &&
          !isError &&
          (users.length > 0 ? (
            users.map((item) => {
              return <Component key={item.id} item={item} />;
            })
           
          ) : (
            <div>No data to display</div>
          ))} */}
          {!isLoading && !isError && (
            <div>Men data length:{mensProducts.length}</div>
          )}
          {!isLoading && !isError && (
            <div>Women data length:{womenProducts.length}</div>
          )}
          {!isLoading && !isError && (
            <div>Kid data length:{kidsProducts.length}</div>
          )}
          {!isLoading && !isError && <div>User data length:{users.length}</div>}
        </div>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
