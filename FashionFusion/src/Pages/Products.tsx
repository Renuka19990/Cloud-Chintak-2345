/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/fetchMenDataReducer/action";
import ProductsGrid from "./ProductsGrid";
import { Box, SimpleGrid, Skeleton, Grid, Input, Select  } from "@chakra-ui/react";
import FilterSection from "../Components/FilterSection";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <SimpleGrid marginTop={"25px"} columns={4} spacing={10}>
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
          <Skeleton height="400px" />
        </SimpleGrid>
      </div>
    );
  }
  if (isError) {
    return <div>Error : {isError}</div>;
  }
  return (
    <Grid templateColumns={{ base: "1fr", md: "0.2fr 1fr" }} height="100vh">
      <Box
        position="sticky"
        top="0"
        overflowY="auto"
        maxHeight="100vh"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          }
        }}
        gridColumn={{ base: "1", md: "1" }}
        gridRow={{ base: "1", md: "auto" }}
      >
        <Box p="4">
          <FilterSection/>
        </Box>
      </Box>
      <Box
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          }
        }}
        gridColumn={{ base: "1", md: "2" }}
        gridRow={{ base: "2", md: "auto" }}
      >
        {/* Content for the right column */}
        <Grid templateRows="auto 1fr" height="100%">
          <Box p={{ base: "2", md: "4" }} display="flex" alignItems="center">
            <Input placeholder="Search..." mr="2" width={{ base: "60%", md: "80%" }} focusBorderColor="grey" />
            <Select size="sm"  width={{ base: "40%", md: "20%" }} focusBorderColor="grey">
              <option value="">Curated For You</option>
              <option value="toprated">Top Rated</option>
              <option value="lowtohigh">Price(Low to High)</option>
              <option value="hightolow">Price(High to Low)</option>
            </Select>
          </Box>
          <Box p={{ base: "2", md: "4" }} css={{ 
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '6px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            }
          }}>
            <ProductsGrid products={data} />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Products;
