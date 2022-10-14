import { Button, Input, InputGroup } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: object;
}

const GetStartedForm = ({ size }: Props) => {
  return (
    <InputGroup w={size} size="md">
      <Input
        type={`email`}
        borderRadius={`5px 0 0 5px`}
        border={`1px solid white!`}
        bgColor={`white`}
        placeholder="Email address"
      />
      <Button
        borderRadius={`0 5px 5px 0`}
        size={`sm`}
        bgColor={`accent`}
        px={7}
        py={5}
        color={`white`}
      >
        Get Started
      </Button>
    </InputGroup>
  );
};

export default GetStartedForm;
