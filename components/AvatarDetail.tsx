import { Avatar, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: string;
  name: string;
  isCard?: boolean;
}

const AvatarDetail = ({ name, size, isCard }: Props) => {
  return (
    <Flex alignItems={`center`} gap={3}>
      <Avatar
        size={size}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      />
      <Flex alignItems={`center`} gap={2}>
        {/* <Text
          display={isCard ? `none` : `block`}
          fontSize={`xs`}
          fontWeight={`thin`}
        >
          By
        </Text> */}
        <Text fontSize={`sm`} fontWeight={`semibold`}>
          {name}
        </Text>
        <Text
          display={isCard ? `none` : `block`}
          fontSize={`xs`}
          fontWeight={`thin`}
        >
          - May 21, 2022
        </Text>
      </Flex>
    </Flex>
  );
};

export default AvatarDetail;
