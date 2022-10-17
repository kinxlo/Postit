import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: object;
}

const GetStartedForm = ({ size }: Props) => {
  return (
    <InputGroup w={size} size="lg">
      <Input
        type={`email`}
        borderRadius={`5px 0 0 5px`}
        bgColor={`white`}
        placeholder="Email address"
      />
      <InputRightAddon bg={`accent`} color={`white`} cursor={`pointer`}>
        Get Started
      </InputRightAddon>
    </InputGroup>
  );
};

export default GetStartedForm;
