import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { SidebarContentAdmin } from '../Components/SidebarContentAdmin';
import { MobileNavAdmin } from '../Components/MobileNavAdmin';

const  AdminUsers:React.FC=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} >
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
  
        <MobileNavAdmin onOpen={onOpen} pos="sticky" top="0px"/>
  
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
          Welcome to admin Users...
          <p>
            consectetur. Harum unde quos, cupiditate illum quo, officia debitis
            commodi optio praesentium, dolore accusantium nemo quae. Cupiditate
            ullam quaerat totam doloremque accusamus enim odit, magnam, nisi,
            reiciendis porro excepturi. Eaque ut quisquam magnam quos itaque,
            nobis quasi deleniti aperiam nihil cum fugit optio sit incidunt minus
            fuga sint nam quam? Fuga architecto omnis maxime maiores, fugit
            aliquid dolorum. lorem200
          </p>
        </Box>
      </Box>
  )
}

export default AdminUsers