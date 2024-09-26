"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay,  useDisclosure } from '@chakra-ui/react'


function Hamburguer() {
  
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [placement, setPlacement] = React.useState('right')
      
        return (
          <>
            
            <Button className="text-gray-950" colorScheme='' onClick={onOpen}>
            <GiHamburgerMenu className="w-7 h-7" />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }
  


export default Hamburguer