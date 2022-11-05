import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import { BingNewsService } from "../utils/axios/BingNewsServices";
import MiniDetailedCard from "./MiniDetailedCard";

interface Props {
  newsData: [];
}

const QuickUpdateNews = ({ newsData }: Props) => {
  const latestNews = newsData.map((news: any) => {
    return (
      <MiniDetailedCard
        key={news.internalID}
        image={news.thumbnailImage}
        tagName={news.secondaryBrands[0]}
        title={news.title}
      />
    );
  });

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
      {latestNews}
    </SimpleGrid>
  );
};

export default QuickUpdateNews;
