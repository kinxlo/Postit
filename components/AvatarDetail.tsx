import { Avatar, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: string;
  name: string;
  isCard?: boolean;
  date: string;
}

const AvatarDetail = ({ name, size, isCard, date }: Props) => {
  return (
    <Flex alignItems={`center`} gap={3}>
      <Avatar bg={`black`} color={`white`} size={size} name={name} src="null" />
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
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default AvatarDetail;
