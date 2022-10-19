import React from "react";
import { Tag } from "@chakra-ui/react";
interface props {
  name: string;
  color: string;
}
const bgTag = [
  {
    name: ["markets", "business", "stocks"],
    color: "green",
  },
  {
    name: ["technology", "world", "industries"],
    color: "blue",
  },
  {
    name: ["view", "lifestyle"],
    color: "yellow",
  },

  {
    name: ["politics", "sports"],
    color: "red",
  },
];

const TagLabel = ({ name, color }: props) => {
  const bgColor = bgTag.find((tag) => {
    if (tag.name.includes(name.toLocaleLowerCase())) return tag;
  });

  return (
    <Tag
      bgColor={bgColor?.color}
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
