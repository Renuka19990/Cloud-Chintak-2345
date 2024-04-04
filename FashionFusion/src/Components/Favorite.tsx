import './Favorite.css';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import axios from 'axios';

import { Image,  Button } from '@chakra-ui/react';


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
  const response = await fetch('https://mock-server-app-1.onrender.com/wishlist');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

const MyComponentF: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

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

  const handleAddToCart = async (product: Product) => {
    try {
      await axios.post('https://mock-server-app-1.onrender.com/cart', {
        product,
      });
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); 
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (isLoading) {
    return (
      <div className='LoadingF'>
        <CircularProgress isIndeterminate color='green.300' />
      </div>
    );
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
              WishList Is Empty <br />
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
    <Box className='card-grid'>
      {items.map((item) => (
         item.product && (
        <Box className='cardF' key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={item.product.imageURL} alt={item.product.name} className='card-img-topF' />
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="2">{item.product.name}</Text>
            <Text fontSize="md" color="gray.600" mb="4">{item.product.description}</Text>
            <Text fontSize="lg" color="green.500" mb="2">Price: ${item.product.price}</Text>
            <Text fontSize="lg" color="blue.500" mb="2">Stock: {item.product.stock}</Text>
            <Text fontSize="lg" color="purple.500" mb="4">Rating: {item.product.rating}</Text>
            <Button colorScheme="blue" onClick={() => handleAddToCart(item.product)}>Add To Cart</Button>
          </Box>
        </Box>
      )))}
      {showSuccessMessage && (
        <Box className="success-message" mt="4" p="4" bg="green.100" borderWidth="1px" borderColor="green.400" borderRadius="md">
          Item added to cart successfully. 🎉
        </Box>
      )}
    </Box>
  );
      }

export default MyComponentF;


