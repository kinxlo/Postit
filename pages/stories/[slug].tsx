import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Layout from "../../layout/Layout";


const Singlestory = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Post: {slug}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

Singlestory.getLayout = function getLayout(component: ReactElement) {
  return <Layout>{component}</Layout>;
};

export default Singlestory;
