import {
  Box,
  Flex,
  Image,
  Icon,
  Text,
  Highlight,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FaBell, FaCog } from "react-icons/fa";
import {
  IoFileTrayFullSharp,
  IoHome,
  IoPerson,
} from "react-icons/io5";
import DashboardRightSideNavDrawer from "./DashboardRightSideNavDrawer";

const DashboardSidenav = () => {
  return (
    <Flex
      pos={{ base: `fixed`, md: `sticky` }}
      top={{ base: `static`, md: 0 }}
      bottom={{ base: 0, md: `static` }}
      left={0}
      zIndex={2}
      py={{ base: 3, md: 6 }}
      px={5}
      flexDir={{ base: `row`, md: `column` }}
      alignItems={`center`}
      justifyContent={{ base: `center`, md: `space-between` }}
      bg={{ base: `black`, md: `transparent` }}
      color={{ base: `white`, md: `black` }}
      h={{ base: `fit-content`, md: `100vh` }}
      w={{ base: `100vw`, md: `fit-content` }}
    >
      <Box display={{ base: `none`, md: `block` }}>
        <Link href={`/`}>
          <Image
            cursor={`pointer`}
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665795885/Postit/logo_1_nyxl52.png`}
            alt={`logo`}
          />
        </Link>
      </Box>
      <Flex
        gap={12}
        alignItems={`end`}
        flexDir={{ base: `row`, md: `column` }}
      >
        <NextLink href={`/dashboard`}>
          <Link px={1}>
            <Icon fontSize={{ base: `xl`, md: `3xl` }} as={IoHome} />
          </Link>
        </NextLink>
        <NextLink href={`/dashboard/stories`}>
          <Link px={1}>
            <Icon
              fontSize={{ base: `xl`, md: `3xl` }}
              as={IoFileTrayFullSharp}
            />
          </Link>
        </NextLink>
        <NextLink href={`/dashboard/profile`}>
          <Link px={1}>
            <Icon fontSize={{ base: `xl`, md: `3xl` }} as={IoPerson} />
          </Link>
        </NextLink>
        <NextLink href={`/dashboard/notification`}>
          <Link px={1}>
            <Icon fontSize={{ base: `xl`, md: `3xl` }} as={FaBell} />
          </Link>
        </NextLink>
        <NextLink href={`/dashboard/settings`}>
          <Link px={1}>
            <Icon fontSize={{ base: `xl`, md: `3xl` }} as={FaCog} />
          </Link>
        </NextLink>
        <DashboardRightSideNavDrawer />
      </Flex>
      <Box display={{ base: `none`, md: `block` }}>
        <Text fontWeight={600} textAlign={`center`} fontSize={`xs`}>
          <Highlight query="it" styles={{ color: `accent` }}>
            &copy; 2022 Postit.
          </Highlight>
        </Text>
      </Box>
    </Flex>
  );
};

export default DashboardSidenav;
