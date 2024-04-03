import './Card.css';
import React, { useEffect, useState } from "react";
import { CircularProgress } from '@chakra-ui/react'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  createIcon,
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
      ))}
    </div>
  );
};

export default MyComponentB;


const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z'
      fill='currentColor'
    />
  ),
});