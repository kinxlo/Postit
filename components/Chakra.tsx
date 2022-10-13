import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../styles/theme";

interface iProps {
  children?: ReactNode;
}

export function Chakra({ children }: iProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
