import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Icon
        display={{ md: `none` }}
        ref={btnRef}
        onClick={onOpen}
        fontSize={`2.5rem`}
        as={IoMenuOutline}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
