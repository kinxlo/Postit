import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Hero from "../../components/Hero";
import MiniDetailedCard from "../../components/MiniDetailedCard";
import TrendCard from "../../components/TrendCard";

const index = () => {
  const grid: object = {
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(5, 1fr)",
    "2xl": "repeat(5, 1fr)",
  };

  const span = {
    gridColumn: "span 2 / auto",
  };

  return (
    <main>
      <header>
        <Hero
          image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665668179/Postit/Rectangle_3_i36ay8.png`}
        >
          <Heading fontSize={`8xl`} as={`h1`}>
            Stay Curious.
          </Heading>
          <Text lineHeight={8} letterSpacing={`wide`}>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </Text>
        </Hero>
      </header>
      <Container
        py={`1rem`}
        my={16}
        mb={24}
        border={`0.5px solid lightgrey`}
        borderRadius={5}
        className={`cc-container`}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
          <MiniDetailedCard
            image={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`}
            tagName={`lifestyle`}
            title={`The 20 Biggest Fashion Companies In Nigeria 2022`}
          />
          <MiniDetailedCard
            image={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`}
            tagName={`lifestyle`}
            title={`The 20 Biggest Fashion Companies In Nigeria 2022`}
          />
          <MiniDetailedCard
            image={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`}
            tagName={`lifestyle`}
            title={`The 20 Biggest Fashion Companies In Nigeria 2022`}
          />
        </SimpleGrid>
      </Container>
      <Container mb={5} className={`cc-container`}>
        <Heading>Trending Stories</Heading>
        <Grid
          templateRows={{ base: `repeat(2, 1fr)` }}
          templateColumns={{ base: `repeat(12, 1fr)` }}
          alignItems={`end`}
          gap={4}
        >
          <GridItem
            h={{ base: `25rem`, md: `34.5rem` }}
            rowSpan={{ base: 0, md: 2 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `16rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 8 }}
          >
            <TrendCard />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `17.6rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `17.6rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard />
          </GridItem>
        </Grid>
      </Container>
    </main>
  );
};

export default index;
