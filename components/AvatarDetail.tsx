import { Avatar, Text, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: string;
  name: string;
}

const AvatarDetail = ({ name, size }: Props) => {
  return (
    <Flex alignItems={`center`} gap={3}>
      <Avatar
        size={size}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      />
      <Text fontSize={`sm`}>{name}</Text>
    </Flex>
  );
};

export default AvatarDetail;
