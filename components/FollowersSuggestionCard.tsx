import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { GoPlusSmall } from "react-icons/go";

const FollowersSuggestionCard = () => {
  return (
    <Flex alignItems={`start`} justifyContent={`space-between`}>
      <Flex alignItems={`start`} gap={5}>
        <Avatar
          size={`md`}
          src={`https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
        />
        <Box>
          <Heading fontSize={`xl`}>Mario Davies</Heading>
          <Text color={`lightGrey`} fontSize={`xs`}>
            Developer, Blogger, and Tech Enthusiast
          </Text>
        </Box>
      </Flex>
      <Button
        borderColor={`accent`}
        color={`accent`}
        px={7}
        variant={`outline`}
      >
        <Icon mr={2} as={GoPlusSmall} /> Follow
      </Button>
    </Flex>
  );
};

export default FollowersSuggestionCard;
