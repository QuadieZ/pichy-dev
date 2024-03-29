import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import Head from "next/head";
import { NavigationBar } from "@/components";
import { useRouter } from "next/router";
import "../styles/swiper.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const path = asPath.split("#")[0];
  const isHomePage = path === "/";
  return (
    <ChakraProvider theme={theme}>
      <Analytics />
      <Head>
        <title>Pichy.dev</title>
        <meta name="description" content="Pichy's Personal Website✨" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Box
        w="100vw"
        h="fit-content"
        minH="100vh"
        bgColor="background.primary"
        position="absolute"
        top="0"
        right="0"
      >
        {!isHomePage && <NavigationBar />}
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
