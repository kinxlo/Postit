import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Icon,
  Image,
  Link,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import Links from "./Links";

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

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent p={2} bg={`black`}>
          {/* <DrawerCloseButton
            m={5}
            p={5}
            borderRadius={`100%`}
            bg={`red`}
            color={`white`}
          /> */}
          <DrawerHeader p={0} mt={5} alignSelf={`center`}>
            <Link href={`/`}>
              <Image
                cursor={`pointer`}
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1665795885/Postit/logo_1_nyxl52.png"
                alt="postit"
              />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Links isMobile={true} />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
