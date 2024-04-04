import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import KidCard from './KidCard';

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

const KidGrid: React.FC<Props> = ({ products }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="30px">
      {products.map((product) => (
        <KidCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default KidGrid;
