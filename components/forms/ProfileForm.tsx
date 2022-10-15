import {
  Box,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ProfileForm = () => {
  return (
    <Box>
      <Heading>Personal Details</Heading>
      <Box mb={7}>
        <hr />
      </Box>
      <Box>
        <FormControl>
          <SimpleGrid gap={{ md: 5 }} columns={{ base: 1, md: 2 }}>
            <Input fontSize={`sm`} mb={5} size={`lg`} placeholder="Full Name" />
            <Input
              fontSize={`sm`}
              mb={5}
              size={`lg`}
              placeholder="Display Name"
            />
          </SimpleGrid>
          <SimpleGrid gap={{ md: 5 }} columns={{ base: 1, md: 2 }}>
            <Input
              fontSize={`sm`}
              mb={5}
              size={`lg`}
              placeholder="What do you do ?"
            />
            <Input
              fontSize={`sm`}
              mb={5}
              size={`lg`}
              placeholder="your website"
            />
          </SimpleGrid>
          <Textarea
            fontSize={`sm`}
            h={`20rem`}
            placeholder="Write something about yourself"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default ProfileForm;
