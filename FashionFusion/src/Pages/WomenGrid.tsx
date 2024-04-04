import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import WomenCard from './WomenCard';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface Props {
  products: Product[];
}

const WomenGrid: React.FC<Props> = ({ products }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="30px">
      {products.map((product) => (
        <WomenCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default WomenGrid;
