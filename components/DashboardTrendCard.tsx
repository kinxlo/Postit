import { Box, Text } from "@chakra-ui/react";
import React from "react";
import AvatarDetail from "./AvatarDetail";

const DashboardTrendCard = () => {
  return (
    <Box>
      <AvatarDetail size={`sm`} name={`Kingsley Solomon`} />
      <Text mt={2.5} color={`lightGrey`}>
        The 20 Biggest Fintech Companies In Nigeria 2022
      </Text>
    </Box>
  );
};

export default DashboardTrendCard;
