import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  btnTitle: string;
}

const Feedback = ({ text, btnTitle }: Props) => {
  return (
    <Box my={40} w={`50%`} mx={`auto`} textAlign={`center`}>
      <Text mb={7} color={`lightGrey`}>
        {text}
      </Text>
      <Button px={16} bg={`accent`} color={`white`}>
        {btnTitle}
      </Button>
    </Box>
  );
};

export default Feedback;
