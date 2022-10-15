import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ProfileCrumb = () => {
  return (
    <Flex alignItems={`start`} justifyContent={`space-between`}>
      <Flex alignItems={`start`} gap={5}>
        <Avatar
          size={`lg`}
          src={`https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
        >
          <AvatarBadge border={`3px solid`} top={`5px`} boxSize="0.625em" bg="green.500" />
        </Avatar>
        <Box>
          <Heading fontSize={`3xl`}>Mario Davies</Heading>
          <Text color={`lightGrey`} fontSize={`xs`}>
            Designer and Blogger
          </Text>
        </Box>
      </Flex>
      <Link href={`/`}>
        <Heading
          fontWeight={400}
          color={`accent`}
          lineHeight={`28.96px`}
          fontSize={`md`}
        >
          View Profile
        </Heading>
      </Link>
    </Flex>
  );
};

export default ProfileCrumb;
