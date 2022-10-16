import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  text: string;
  isPublished?: boolean;
  isDraft?: boolean;
  isAll?: boolean;
}

const StoriesCard = ({ title, text, isPublished, isDraft, isAll }: Props) => {
  const toast = useToast({
    description:
      "Your story has been unpublished. Kindly check drafts for unpublished stories.",
    duration: 5000,
    status: `error`,
    containerStyle: {
      maxWidth: `600px`,
      borderRadius: `10px`,
      fontSize: `sm`,
    },
  });

  return (
    <Flex mb={10} flexDir={{ base: `column`, md: `row` }} gap={4}>
      <Box>
        <Text fontWeight={600} as={`h3`} fontSize={`lg`}>
          {title}
        </Text>
        <Text fontSize={`sm`} my={3} color={`lightGrey`}>
          {text}
        </Text>
        <Text fontSize={`sm`} color={`lightGrey`} fontStyle={`italic`}>
          Published
        </Text>
      </Box>
      <Box>
        <Flex gap={4} display={isAll ? `flex` : `none`}>
          <Button px={6} bg={`accent`} color={`white`}>
            View Post
          </Button>
          <Button
            onClick={() => toast()}
            px={6}
            variant={`ghost`}
            color={`red`}
            borderColor={`red`}
          >
            Delete
          </Button>
        </Flex>
        <Flex gap={4} display={isPublished ? `flex` : `none`}>
          <Button px={6} bg={`accent`} color={`white`}>
            View Post
          </Button>
          <Button px={6} variant={`ghost`} color={`red`} borderColor={`red`}>
            Unpublish
          </Button>
        </Flex>
        <Flex gap={4} display={isDraft ? `flex` : `none`}>
          <Button px={6} bg={`accent`} color={`white`}>
            Edit
          </Button>
          <Button
            onClick={() => toast()}
            px={6}
            variant={`ghost`}
            color={`red`}
            borderColor={`red`}
          >
            Delete
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default StoriesCard;
