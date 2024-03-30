import React, { useState } from 'react';
import { Box, Image, Text, IconButton, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id:number;
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {id, name, price, imageURL, description, stock, rating } = product;
  const [cartClicked, setCartClicked] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);
//   const [cartItemCount, setCartItemCount] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('https://mock-server-app-1.onrender.com/cart');
//         const cartItems = response.data;
//         setCartItemCount(cartItems.length);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [cartClicked]);

  const handleAddToCart = async () => {
    try {
      await axios.post('https://mock-server-app-1.onrender.com/cart', {
        product: { name, price, imageURL, description, stock, rating }
      });
      setCartClicked(true);
      setShowModal(true);
      setModalText('Item added to cart successfully.');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await axios.post('https://mock-server-app-1.onrender.com/wishlist', {
        product: { name, price, imageURL, description, stock, rating }
      });
      setWishlistClicked(true);
      setShowModal(true);
      setModalText('Item added to wishlist successfully.');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <Link to={`/products/${id}`}>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Image src={imageURL} alt={name} />

      <Box p="6" textAlign="center">
        <Text
          mt="1"
          fontWeight="bold"
          fontSize="xl"
          color="teal.800"
          lineHeight="short"
        >
          {name}
        </Text>

        <Text mt="2" fontSize="sm" color="gray.600" noOfLines={2} isTruncated>
          {description}
        </Text>

        <Text mt="2" fontSize="lg" color="teal.600">
          ${price}
        </Text>

        <Text mt="2" fontSize="sm" color={stock > 0 ? 'green.600' : 'red.600'}>
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </Text>
        
        <Text mt="2" fontSize="sm">
          Rating: {rating}
        </Text>

        <Flex justify="center" mt="4">
          <IconButton
            aria-label="Add to Wishlist"
            icon={<FaHeart />}
            colorScheme={wishlistClicked ? 'red' : undefined}
            onClick={handleAddToWishlist}
            mr="2"
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Add to Cart"
            icon={<FaShoppingCart />}
            colorScheme={cartClicked ? 'green' : undefined}
            onClick={handleAddToCart}
            size="sm"
            variant="ghost"
          />
        </Flex>
      </Box>
      
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalText}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={() => setShowModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </Link>
  );
};

export default ProductCard;
