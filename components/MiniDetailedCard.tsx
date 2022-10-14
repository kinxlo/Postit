import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import TagLabel from "./TagLabel";

interface props {
  image: string;
  title: string;
  tagName: string;
}

const MiniDetailedCard = ({ image, title, tagName }: props) => {
  return (
    <Flex alignItems={`end`} gap={4}>
      <Box w={`146px`} h={`100%`}>
        <Image src={image} alt="title" className={`cc-img-fluid`} />
      </Box>
      <Flex
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`start`}
        width={`15rem`}
        gap={3}
      >
        <TagLabel color={`#E5BF5E`} name={tagName} />
        <Text pr={0}>{title}</Text>
      </Flex>
    </Flex>
  );
};

export default MiniDetailedCard;
