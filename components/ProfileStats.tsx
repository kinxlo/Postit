import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  textFZ?: string;
  numFZ?: string;
  align?: string;
}

const ProfileStats = ({ textFZ, numFZ, align }: Props) => {
  //numFZ abd textFZ === numberFontsize and textFontsize
  return (
    <Flex justifyContent={align} gap={12}>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={numFZ}>
          56
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={textFZ}>
          Posts
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={numFZ}>
          75
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={textFZ}>
          Likes
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={numFZ}>
          345
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={textFZ}>
          Followers
        </Heading>
      </Box>
      <Box textAlign={`center`}>
        <Heading color={`accent`} fontWeight={700} fontSize={numFZ}>
          170
        </Heading>
        <Heading color={`lightGrey`} fontWeight={700} fontSize={textFZ}>
          Following
        </Heading>
      </Box>
    </Flex>
  );
};

export default ProfileStats;
