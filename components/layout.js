import Head from "next/head";

import { HStack, Image, VStack } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { TruffBodyText } from "./typography";

const Layout = ({ children }) => {
  return (
    <div id="app-root">
      <Head>
        <title>TRUFF</title>
        <meta name="description" content="Start your year right with truff." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <VStack
          justify="space-around"
          maxW={{ base: "90vw", md: "80vw", lg: "70vw", "2xl": "60vw" }}
          marginX="auto"
          alignItems="center"
        >
          {children}
        </VStack>
        <HStack flexDir={{ base: "column", md: 'row' }} w="100vw" bg="#1a1a1a" justify="center">
          <TruffBodyText color="white" display="flex" alignItems="center">
            Not Sponsored or Created By
          <Image
            cursor="pointer"
            src="https://www.truff.com/svg/logo.svg"
            onClick={() => window.open("https://www.truff.com/", "_blank")}
            alt="Truff Logo"
            ml="1em"
            height={{ base: "3em", lg: "5em"}}
            width={{ base: "3em", lg: "5em"}}
          />
                    </TruffBodyText>
          <TruffBodyText color="white">
            Just a sample landing page created by{" "}
            <a
              href="#"
              onClick={() => window.open("https://novigo.info", "_blank")}
            >
              Novigo Inc.
            </a>
          </TruffBodyText>
        </HStack>
      </ChakraProvider>
    </div>
  );
};

export default Layout;
