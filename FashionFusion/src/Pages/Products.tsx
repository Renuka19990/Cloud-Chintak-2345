/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/fetchMenDataReducer/action";
import ProductsGrid from "./ProductsGrid";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <SimpleGrid marginTop={'25px'}  columns={4} spacing={10}>
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
    <div>
      <ProductsGrid products={data} />

      {/* <ul>
        {data.map((el: any, index: number) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Products;
