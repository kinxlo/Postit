import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import React from "react";
import GetStartedForm from "./forms/GetStartedForm";

const Footer = () => {
  const grid = {
    base: "repeat(12, 1fr)",
  };

  return (
    <Box py={16} bg={`black`} color={`white`}>
      <Container className={`cc-container`}>
        <Grid templateColumns={grid} gap={16}>
          <GridItem
            // w={{ base: `60%`, md: `100%` }}
            colSpan={{ base: 8, md: 4 }}
          >
            <Flex flexDir={`column`} justifyContent={`space-between`} gap={5}>
              <Heading fontWeight={600} fontSize={`2xl`}>
                <Highlight
                  query={`it`}
                  styles={{
                    color: `accent`,
                  }}
                >
                  About Postit.
                </Highlight>
              </Heading>
              <Text fontWeight={`thin`} lineHeight={7}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc
                etiicies in rhoncus, rhoncus in arcu. Tincidunt neque fusce
                vitaenisi aliquet. que maeae tortoere necsem commodo ac.
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            // w={{ base: `60%`, md: `100%` }}
            colSpan={{ base: 8, md: 2 }}
          >
            <Flex flexDir={`column`} gap={5}>
              <Heading fontSize={`2xl`}>Quick Menu</Heading>
              <Box fontWeight={`thin`}>
                <Link>
                  <Text mb={3}>Home</Text>
                </Link>
                <Link>
                  <Text mb={3}>Stories</Text>
                </Link>
                <Link>
                  <Text mb={3}>Trending Stories</Text>
                </Link>
                <Link>
                  <Text mb={3}>Popular Stories</Text>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            // w={{ base: `60%`, md: `100%` }}
            colSpan={{ base: 8, md: 2 }}
          >
            <Flex flexDir={`column`} gap={5}>
              <Heading fontSize={`2xl`}>Links</Heading>
              <Box fontWeight={`thin`}>
                <Link>
                  <Text mb={3}>Signup</Text>
                </Link>
                <Link>
                  <Text mb={3}>Login</Text>
                </Link>
                <Link>
                  <Text mb={3}>Contact us</Text>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 4 }}>
            <Heading fontSize={`2xl`}>Subscribe to our newsletter</Heading>
            <Box color={`black`} bg={`white`} p={1} mt={5} borderRadius={6}>
              <GetStartedForm size={{ base: `100%` }} />
            </Box>
          </GridItem>
        </Grid>
        <Box my={10}>
          <hr />
        </Box>
        <Flex justifyContent={`end`} alignItems={`center`} gap={10}>
          <Box>
            <Text fontSize={`sm`}>Terms and Policy</Text>
          </Box>
          <Flex gap={5}>
            <Link>
              <Icon as={FaTwitter} />
            </Link>
            <Link>
              <Icon as={FaFacebookF} />
            </Link>
            <Link>
              <Icon as={FaLinkedinIn} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
