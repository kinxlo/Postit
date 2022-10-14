import React from "react";
import { Tag } from "@chakra-ui/react";
interface props {
  name: string;
  color: string;
}

const TagLabel = ({ name, color }: props) => {
  return (
    <Tag
      bgColor={color}
      px={6}
      py={`7px`}
      color={`white`}
      textTransform={`capitalize`}
    >
      {name}
    </Tag>
  );
};

export default TagLabel;
