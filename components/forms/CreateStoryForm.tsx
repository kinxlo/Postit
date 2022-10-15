import {
  Box,
  Heading,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";

const CreateStoryForm = () => {
  return (
    <Box>
      <Heading mb={3.5}>Create Story</Heading>
      <FormControl textAlign={`center`} isRequired>
        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaEdit} />
          </InputLeftElement>
          <Input
            fontSize={`sm`}
            placeholder="Title"
            _placeholder={{ fontSize: `sm` }}
          />
        </InputGroup>
        <InputGroup size={`lg`}>
          <Textarea
            h={`20rem`}
            p={5}
            fontSize={`sm`}
            placeholder="Write your story..."
            _placeholder={{ fontSize: `sm` }}
          />
        </InputGroup>
        <Button my={5} px={20} py={8} size={`lg`} bg={`accent`} color={`white`}>
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};

export default CreateStoryForm;
