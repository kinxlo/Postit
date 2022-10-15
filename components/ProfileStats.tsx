import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ProfileStats = () => {
  return (
    <Flex justifyContent={`center`} gap={12}>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={`2xl`}>
          56
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={`md`}>
          Posts
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={`2xl`}>
          75
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={`md`}>
          Likes
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={`2xl`}>
          345
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={`md`}>
          Followers
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={`2xl`}>
          170
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={`md`}>
          Following
        </Heading>
      </Box>
    </Flex>
  );
};

export default ProfileStats;
