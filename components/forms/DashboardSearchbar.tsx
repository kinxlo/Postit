import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const DashboardSearchbar = () => {
  return (
    <Box>
      <InputGroup size={`lg`}>
        <InputLeftElement pointerEvents="none">
          <Icon as={RiSearchLine} />
        </InputLeftElement>
        <Input
          fontSize={`sm`}
          borderRadius={`40px`}
          type="tel"
          placeholder="Search for stories, articles and more"
          _placeholder={{ fontSize: `sm` }}
        />
      </InputGroup>
    </Box>
  );
};

export default DashboardSearchbar;
