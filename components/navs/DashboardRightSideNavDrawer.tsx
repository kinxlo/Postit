import React from "react";
import NextLink from "next/link";
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
  Box,
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import DashboardRightnav from "./DashboardRightnav";

const DashboardRightSideNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link onClick={onOpen}>
        <Icon
          display={{ md: `none` }}
          px={1}
          color={`gold`}
          fontSize={`26px`}
          as={IoPersonCircleOutline}
        />
      </Link>

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={`black`} color={`white`}>
          <DrawerBody p={0}>
            <DashboardRightnav />
          </DrawerBody>
          <DrawerFooter alignSelf={`center`}>
            <NextLink href={`/`}>
              <Box w={`5em`}>
                <Image
                  src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1665795885/Postit/logo_1_nyxl52.png"
                  alt="logo"
                />
              </Box>
            </NextLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardRightSideNavDrawer;
