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
import React from "react";
import { GoPlusSmall } from "react-icons/go";

interface Props {
  name: string;
  job: string;
  jobSize: string;
  isProfile: boolean;
  picSize: string;
  nameSize: string;
  img: string;
  align?: string;
}

const FollowersSuggestionCard = ({
  name,
  job,
  isProfile,
  picSize,
  nameSize,
  img,
  jobSize,
  align,
}: Props) => {
  return (
    <Flex gap={3} alignItems={align} justifyContent={`space-between`}>
      <Flex
        flexDir={{ base: `${isProfile ? "column" : "row"}`, md: `row` }}
        alignItems={align}
        gap={5}
      >
        <Avatar size={picSize} src={img} />
        <Box>
          <Heading fontSize={nameSize}>{name}</Heading>
          <Text color={`lightGrey`} fontSize={jobSize} pr={{ base: 0, md: 5 }}>
            {job}
          </Text>
        </Box>
      </Flex>
      <Box>
        {isProfile ? (
          <Button size={`md`} bgColor={`accent`} color={`white`} px={5}>
            Edit Profile
          </Button>
        ) : (
          <Button
            size={`md`}
            borderColor={`accent`}
            color={`accent`}
            w={`8rem`}
            variant={`outline`}
          >
            <Icon mr={1} as={GoPlusSmall} /> Follow
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default FollowersSuggestionCard;
