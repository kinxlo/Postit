import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Chakra } from "../components/Chakra";
import Head from "next/head";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Head>
        <title>Postit</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
