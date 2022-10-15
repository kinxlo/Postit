import "../styles/globals.scss";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Chakra from "../components/Chakra";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps?: AppProps) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  );

  return <Chakra>{layout}</Chakra>;
}

export default MyApp;
