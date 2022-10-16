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
  Flex,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaImage, FaTags } from "react-icons/fa";

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
        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaTags} />
          </InputLeftElement>
          <Input
            fontSize={`sm`}
            placeholder="Tags"
            _placeholder={{ fontSize: `sm` }}
          />
        </InputGroup>
        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaImage} />
          </InputLeftElement>
          <Input
            readOnly
            fontSize={`sm`}
            placeholder="Tumbnail"
            _placeholder={{ fontSize: `sm` }}
          />
          <InputRightAddon bg={`accent`} color={`white`} cursor={`pointer`}>
            Choose File
          </InputRightAddon>
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
        <Flex justifyContent={`center`} gap={5}>
          {/* <Button my={5} px={20} size={`lg`} bg={`accent`} color={`white`}>
            Continue
          </Button> */}
          <Button my={5} px={20} size={`lg`} bg={`accent`} color={`white`}>
            Publish Story
          </Button>
          <Button variant={`ghost`} my={5} px={20} size={`lg`} color={`red`}>
            Save as Drafts
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default CreateStoryForm;
