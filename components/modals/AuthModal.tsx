import React, { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Highlight,
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
      <Button
        variant={`unstyled`}
        display={isSignedIn ? `block` : `none`}
        onClick={onOpen}
        fontSize={`1.5rem`}
        fontWeight={400}
        borderRadius={`none`}
      >
        Sign In
      </Button>
      <Button
        display={isSignedIn ? `none` : `block`}
        onClick={onOpen}
        bgColor={`accent`}
        fontSize={`1.5rem`}
        px={10}
        fontWeight={400}
        color={`white`}
      >
        Get Started
      </Button>

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
