import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

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

const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing="30px">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
