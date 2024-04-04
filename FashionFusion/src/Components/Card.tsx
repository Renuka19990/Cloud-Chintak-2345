import './Card.css';
import React, { useEffect, useState } from "react";
import { CircularProgress } from '@chakra-ui/react'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  
} from '@chakra-ui/react';

interface Product {
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface Item {
  id: number;
  product: Product;
}

const fetchData = async () => {
  const response = await fetch("https://mock-server-app-1.onrender.com/cart");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const MyComponentB: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData()
      .then((data: Item[]) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  if (isLoading) {
    return <div><CircularProgress isIndeterminate color='green.300'/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return (
      <div>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Cart Is Empty <br />
              <Text as={'span'} color={'green.400'}>
                😊😊
              </Text>
            </Heading>
          </Stack>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        item.product && (
          <div className="cardB" key={item.id}>
            <img src={item.product.imageURL} alt={item.product.name} className="card-img-topB" />
            <div className="card-bodyB">
              <h5 className="card-titleB">{item.product.name}</h5>
              <p className="card-textB">{item.product.description}</p>
              <p className="card-textB">Price: ${item.product.price}</p>
              <p className="card-textB">Stock: {item.product.stock}</p>
              <p className="card-textB">Rating: {item.product.rating}</p>
              <button className="btn-primaryB" onClick={() => handleDeleteItem(item.id)}>DELETE</button>
            </div>
          </div>
        )
      ))}
    </div>
  );
  
  
  
};

export default MyComponentB;
