import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AnimatedTab from "./products/animated-tab";
import ProductItem from "./products/product-item";

const hotSauces = [
  {
    name: "TRUFF ORIGINAL HOT SAUCE",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666756689/Product_SignatureIngredientsTransparent-02_1_x384_crop_center_2x.webp",
    btnText: "SEE THE OG",
    link: "https://www.truff.com/products/truff?variant=39755282874502"
  },
  {
    name: "TRUFF HOTTER SAUCE",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666756689/69024548_375483899804388_2624562739724419072_n_x384_crop_center_2x_2.webp",
    btnText: "THIS IS HOT!!!!!!!",
    link: "https://www.truff.com/products/hotter-truff-hot-sauce?variant=20522384588854"
  },
  {
    name: "TRUFF WHITE HOT SAUCE",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666756689/Ingredients-TRUFFWhitewithBox-TransparentBackground_x384_crop_center_2x_1.webp",
    btnText: "It's OK",
    link: "https://www.truff.com/products/white-truffle-hot-sauce?variant=17879253090363"
  },
];

const mayos = [
  {
    name: "TRUFF MAYO",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757370/0_46f6ad5f-184e-425c-b3e6-5fcb4eff175a_x384_crop_center_2x.webp",
    btnText: "I don't like mayo",
    link: "https://www.truff.com/products/truff-mayo?variant=34980935499910"
  },
  {
    name: "SPICY TRUFF MAYO",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757370/0_x384_crop_center_2x.webp",
    btnText: "Only for burgers",
    link: "https://www.truff.com/products/spicy-truff-mayo?variant=39772965044358"
  },
];

const pastaSauces = [
  {
    name: "BLACK TRUFFLE POMODORO",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757440/Ingredients-TRUFFPomodoroPastaSauce-TransparentBackground_x384_crop_center_2x.webp",
    btnText: "This is alright",
    link: "https://www.truff.com/products/black-truffle-pomodoro-starter-product?variant=34829465256070"
  },
  {
    name: "TRUFFLE ARRABBIATA",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757440/TruffPasta_Arrabbiata_Ingr_v2_x384_crop_center_2x.webp",
    btnText: "Best pasta sauce in existence",
    link: "https://www.truff.com/products/black-truffle-arrabbiata?variant=34806379675782"
  },
];

const oils = [
  {
    name: "WHITE TRUFFLE OIL",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757506/TRUFF_White_Truffle_Oil_PLP_Transparent_V2_x384_crop_center_2x.webp",
    btnText: "TRY THIS!!!!!",
    link: "https://www.truff.com/products/white-truffle-oil?variant=39932774842502"
  },
  {
    name: "BLACK TRUFFLE OIL",
    image:
      "https://res.cloudinary.com/aa1997/image/upload/v1666757506/Ingredients-TRUFFBlackTruffleOil-TransparentBackground_x384_crop_center_2x.webp",
    btnText: "Good on roast chicken",
    link: "https://www.truff.com/products/truff-black-truffle-oil?variant=39291221639302"
  },
];

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("hot_sauce");

  const onTabChange = (e) => {
    const element = e.target;
    const isChecked = element.checked;
    const name = element.name;
    setSelectedTab(name);
  };
  const twoItemsWidth = { base: "90%", md: "35%", };
  const twoItemsContainerJustify = { justifyContent: 'flex-start' };
  const opacityProductItemStyle = { opacity: "1", transition: "opacity 750ms ease-in" }
  const displayProducts = () => {
    if (selectedTab === "hot_sauce")
      return hotSauces.map((hotSauce, idx) => (
        <ProductItem key={idx} {...hotSauce} {...opacityProductItemStyle} />
      ));
    if (selectedTab === "mayo")
      return mayos.map((mayo, idx) => (
        <ProductItem key={idx} w={twoItemsWidth} {...mayo}  {...opacityProductItemStyle} />
      ));
    if (selectedTab === "pasta_sauce")
      return pastaSauces.map((pastaSauce, idx) => (
        <ProductItem key={idx} w={twoItemsWidth} {...pastaSauce} {...opacityProductItemStyle} />
      ));
    if (selectedTab === "oil")
      return oils.map((oil, idx) => (
        <ProductItem key={idx} w={twoItemsWidth} {...oil} {...opacityProductItemStyle} />
      ));
  };

  return (
    <VStack>
      <AnimatedTab selectedTab={selectedTab} onTabChange={onTabChange} />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify={ selectedTab !== 'hot_sauce' ? {...twoItemsContainerJustify} : 'space-between' }
        alignItems={{ base: "center", md: "unset" }}
        transition="ease-in-out all 500ms"
        w="100%"
      >
        {displayProducts()}
      </Flex>
    </VStack>
  );
};

export default Products;
