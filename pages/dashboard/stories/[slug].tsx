import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import AvatarDetail from "../../../components/AvatarDetail";
import DetailedCard from "../../../components/DetailedCard";
import TagLabel from "../../../components/TagLabel";
import DashboardLayout from "../../../layout/DashboardLayout";

const SinglePost = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Container px={12} py={5} className={`cc-container`}>
      <Box>
        <TagLabel name="Technology" color="purple" />
        <Heading my={5} fontSize={`5xl`}>
          The 20 Biggest Fintech Companies In Nigeria 2022
        </Heading>
        <AvatarDetail name="Mario Davies" size="sm" />
        <Box mt={5} mb={10}>
          <hr />
        </Box>
      </Box>
      <Box h={`22rem`}>
        <Image
          borderRadius={5}
          className={`cc-img-fluid`}
          src={`https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
          alt="img"
        />
      </Box>
      <Box my={12}>
        <Text color={`lightGrey`} fontSize={`lg`} lineHeight={7}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          neque, vitae arcu elit amet arcu. Non quam dignissim blandit lectus
          tempus sit molestie fermentum. Mattis morbi fames nullam enim. Vitae
          commodo tellus cras eu, amet id scelerisque quis. Massa donec
          accumsan, maecenas ullamcorper sagittis, ut felis, faucibus. nibh
          tristique a mattis mattis amet in placerat. Donec ultricies pharetra
          turpis proin. Vulputate volutpat neque diam at metus scelerisque.
          Imperdiet congue ultrices proin nisi. Id sagittis aenean egestas
          metus, aliquet dolor vitae consectetur diam. Porta aliquet cras nisl
          sed sed ut consequat tempus ultricies. Tellus tortor sapien, et
          sagittis. Convallis nunc sem purus egestas. Semper venenatis
          suspendisse in et, velit ultrices facilisis enim mi. Tortor quis
          sapien pulvinar vitae et neque curabitur velit in. Dictum nulla vitae
          vitae gravida consectetur libero arcu, id cras. Erat sed viverra
          auctor eget pellentesque velit. Neque nunc sit ut eu at id morbi
          turpis. Interdum in viverra sodales est adipiscing metus nunc.
          Condimentum massa tincidunt consequat mattis dui in fermentum
          faucibus. Faucibus non amet ornare tellus convallis urna malesuada
          sed. Tellus scelerisque eu, eu posuere mattis. Ac in non dui viverra
          mi cras nibh. Amet euismod ut nunc amet, ullamcorper eu cursus eget
          est. Ipsum praesent integer vestibulum lorem elit lectus. Arcu viverra
          dignissim adipiscing velit id arcu nunc, sit mollis. Condimentum
          viverra vitae, in arcu. Bibendum purus tincidunt aenean neque, iaculis
          quam. Sollicitudin enim, aenean commodo arcu ligula consectetur.
          porttitor faucibus sed. Ac sem pulvinar feugiat elit lobortis. At
          convallis gravida massa, ultricies eu. Erat ornare sed elit sed porta
          egestas duis. Odio pharetra, arcu eros, et metus adipiscing enim,
          odio. Euismod cursus elementum pharetra sed cursus consectetur etiam
          id. Fringilla phasellus vivamus in vehicula aliquam molestie blandit.
          Duis nibh blandit pharetra nisi leo, arcu nunc suspendisse. Volutpat
          vel ac aliquam aliquam mauris. Cras orci commodo morbi habitant
          rhoncus nisl, molestie euismod dui. Blandit in amet nisl ultrices
          vitae sit volutpat. Et urna, ullamcorper sapien, ut at nibh suscipit
          tincidunt ac. Et malesuada justo id massa. Eu, morbi convallis egestas
          egestas vel at ipsum. Ultrices viverra augue praesent massa, cursus
          arcu, sit in suscipit. Nunc blandit eget lobortis non vestibulum
          egestas lacinia ut. Aliquet lorem tristique eros, neque, eros, amet
          urna integer ornare. Et faucibus tristique quis viverra. Bibendum sit
          nibh cursus eu. Adipiscing elit ultrices faucibus neque nullam.
          Pharetra, enim ornare scelerisque id fermentum proin egestas
          tristique. Amet, tempor aliquet ac eu. Amet, tellus, integer enim leo
          risus nisl. Aliquet amet, est mi tristique tempus nisl tellus morbi
          massa. Pharetra libero viverra nullam eget eu, vel nam at aliquam. Dui
          bibendum accumsan orci sit.
        </Text>
      </Box>
      <Flex alignItems={`center`}>
        <Text fontSize={`lg`}>Share post:</Text>
        <Image
          mx={2}
          boxSize={`2.5rem`}
          src="https://img.icons8.com/color/48/000000/twitter--v1.png"
          alt="twitter"
        />
        <Image
          mx={2}
          boxSize={`2rem`}
          src="https://img.icons8.com/color/48/000000/facebook--v1.png"
          alt="facebook"
        />
        <Image
          mx={2}
          boxSize={`2.5rem`}
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="whatsapp"
        />
      </Flex>
      <Box my={12}>
        <Heading fontSize={`3xl`} fontWeight={600}>
          More like this
        </Heading>
        <Box my={5}>
          <hr />
        </Box>
        <DetailedCard width={`251px`} dir="row-reverse" fontsize="2xl" />
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

SinglePost.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default SinglePost;
