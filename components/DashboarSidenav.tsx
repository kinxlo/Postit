import { Box, Flex, Image, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaUserAlt, FaHome, FaEdit, FaBell, FaCog } from "react-icons/fa";

const DashboarSidenav = () => {
  return (
    <Flex
      py={5}
      flexDir={`column`}
      alignItems={`center`}
      justifyContent={`space-between`}
      bg={`black`}
      h={`100vh`}
    >
      <Box>
        <Image
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665795885/Postit/logo_1_nyxl52.png`}
          alt={`logo`}
        />
      </Box>
      <Flex gap={12} flexDir={`column`}>
        <Link href={`/`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaHome} />
        </Link>
        <Link href={`/`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaEdit} />
        </Link>
        <Link href={`/`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaUserAlt} />
        </Link>
        <Link href={`/`}>
          <Icon fontSize={`3xl`} color={`grey`} as={FaBell} />
        </Link>
        <Link href={`/`}>
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
