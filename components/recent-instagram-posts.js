import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TruffTitleText } from "./typography";

const RecentInstagramPosts = () => {
  const widths = { base: "100%", md: "45%", lg: "24%" };
  return (
    <VStack w={{ base: '100%', '2xl': '60vw'}} mt="10vh">
      <TruffTitleText>
        TAG US <b>#truffhotsauce</b>
        <Button
          onClick={() =>
            window.open(
              "https://www.instagram.com/explore/tags/truffhotsauce/",
              "_blank"
            )
          }
          bg='transparent'
          _hover={{
            bg: 'transparent',
            opacity: "0.7",
            transition: '500ms ease-in opacity'
          }}
        >
          <ArrowForwardIcon h={{ base: "1em", md: "2em"}} w={{ base: "2em", md: "3em"}} />
        </Button>
      </TruffTitleText>
      <HStack
        w="100%"
        flexDir={{ base: "column", md: "row" }}
        flexWrap={{ base: "unset", md: "wrap" }}
        justify="center"
      >
        <Image
          w={widths}
          src="/instagram-post-1.jpg"
          alt="Instagram Post 1"
          borderRadius="1em"
        />
        <Image
          w={widths}
          src="/instagram-post-2.jpg"
          alt="Instagram Post 2"
          borderRadius="1em"

        />
        <Image
          w={widths}
          src="/instagram-post-3.webp"
          alt="Instagram Post 3"
          borderRadius="1em"

        />
        <Image
          w={widths}
          src="/instagram-post-4.webp"
          alt="Instagram Post 4"
          borderRadius="1em"

        />
      </HStack>
    </VStack>
  );
};

export default RecentInstagramPosts;
