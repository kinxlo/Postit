import React, { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Highlight,
  Link,
} from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  isSignedIn: boolean;
  title: string;
  subtitle: string;
}

const AuthModal = ({ title, subtitle, isSignedIn, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link display={isSignedIn ? `block` : `none`} onClick={onOpen}>
        Sign In
      </Link>

      <Link
        display={isSignedIn ? `none` : `inline-flex`}
        alignItems={`center`}
        textAlign={`center`}
        justifyContent={`center`}
        onClick={onOpen}
        bgColor={`accent`}
        px={`4rem`}
        h={`45px`}
        fontWeight={400}
        borderRadius={`4px`}
        color={`white`}
      >
        {" "}
        Get Started
      </Link>

      <Modal
        isCentered
        size={{ base: `full`, md: `2xl` }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg={`rgba(0,0,0,0.7)`} />
        <ModalContent p={{ base: 10, sm: 20, xl: 32 }}>
          <ModalHeader textAlign={`center`} fontFamily={`Harmattan`}>
            <Heading mb={3}>
              <Highlight query="it" styles={{ color: `accent` }}>
                {title}
              </Highlight>
            </Heading>
            <Text fontWeight={400} fontSize={`xl`}>
              <Highlight query="it" styles={{ color: `accent` }}>
                {subtitle}
              </Highlight>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
