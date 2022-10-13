import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        display={{ md: `none` }}
        onClick={onOpen}
        fontSize={`2.5rem`}
        as={IoMenuOutline}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Postit</DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
