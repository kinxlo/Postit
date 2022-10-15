import { Box, Flex, Image, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaUserAlt, FaHome, FaEdit, FaBell, FaCog } from "react-icons/fa";

const DashboarSidenav = () => {
  return (
    <Flex
      pos={`sticky`}
      top={0}
      py={5}
      flexDir={`column`}
      alignItems={`center`}
      justifyContent={`space-between`}
      bg={`black`}
      h={`100vh`}
    >
      <Box>
        <Link href={`/`}>
          <Image
            cursor={`pointer`}
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665795885/Postit/logo_1_nyxl52.png`}
            alt={`logo`}
          />
        </Link>
      </Box>
      <Flex gap={12} flexDir={`column`}>
        <Link href={`/dashboard`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaHome} />
        </Link>
        <Link href={`/dashboard/edit`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaEdit} />
        </Link>
        <Link href={`/dashboard/profile`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaUserAlt} />
        </Link>
        <Link href={`/dashboard/notification`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaBell} />
        </Link>
        <Link href={`/dashboard/settings`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaCog} />
        </Link>
      </Flex>
      <Box>
        <Text fontSize={`xs`} color={`white`}>
          &copy; 2022 Postit.
        </Text>
      </Box>
    </Flex>
  );
};

export default DashboarSidenav;
