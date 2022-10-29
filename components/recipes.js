import { Flex, Image, VStack, Text, Button } from "@chakra-ui/react";
import { TruffleTitleLightLgText, TruffTitleLightText } from "./typography";
import FancyButton from './recipes/fancy-button';

const Recipes = () => {
  const imageOnClick = (e) => {
    e.preventDefault();
    const element = e.target;
    window.open(element["dataset"].link, "_blank");
  };
  return (
    <VStack
      minHeight={{ base: "80vh", md: "40vh" }}
      w="100%"
    >
      <TruffleTitleLightLgText mb="-1.5em">
        Our Juicy Recipes
      </TruffleTitleLightLgText>
      <TruffTitleLightText>Use our recipts to help others</TruffTitleLightText>
      <Flex
        h="80%"
        w="100%"
        flexDir={{ base: "column", lg: "row" }}
        justify={{ base: "space-between", lg: "space-between" }}
      >
        <Image
          data-link="https://www.truff.com/articles/garlic-bread-pasta-torte"
          src="https://cdn.shopify.com/s/files/1/2182/2603/files/MG_2327_1.jpg?v=1663248587"
          alt="Garlic bread pasta torte"
          maxH={{ base: "33%", lg: '60vh', '2xl': "55vh" }}
          h="auto"
          w={{ base: "100%", lg: "50%" }}
          borderRadius="1em"
          onClick={imageOnClick}
        />
        <VStack
          h={{ base: "66%", lg: '60vh', '2xl': "55vh" }}
          w={{ base: "100%", lg: "48%" }}
          pl={{ base: "unset", md: "1%" }}
          justify="space-between"
        >
          <Image
            data-link="https://www.truff.com/articles/truff-honey-glazed-turkey"
            src="https://res.cloudinary.com/backpack-cms/image/upload/ar_1,c_fill,q_auto,w_1920/v1640018329/fb577c08-6bb0-4ca1-84b2-933c402beff8/images/_MG_2607%20(2).jpg"
            alt="Honey Glazed Turkey"
            maxH="49%"
            h="auto"
            w={{ base: "100%", lg: "100%" }}
            borderRadius="1em"
            onClick={imageOnClick}
          />
          <Image
            data-link="https://www.truff.com/articles/truffle-spinach-and-mushroom-phyllo-quiche"
            src="https://res.cloudinary.com/backpack-cms/image/upload/ar_1,c_fill,q_auto,w_1920/v1640015037/fb577c08-6bb0-4ca1-84b2-933c402beff8/images/_MG_0474%20(1).jpg"
            alt="Truffle spinach & mushroom phyllo quiche"
            maxH="49%"
            h="auto"
            w={{ base: "100%", lg: "100%" }}
            borderRadius="1em"
            onClick={imageOnClick}
          />
        </VStack>
      </Flex>
      <FancyButton text="Look at Other Recipes" onClick={() => window.open('https://www.truff.com/blogs/truff-kitchen', '_blank')} />
    </VStack>
  );
};

export default Recipes;
