import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100vw"
        h="fit-content"
        minH="100vh"
        bgColor="background.primary"
        position="absolute"
        top="0"
        right="0"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
