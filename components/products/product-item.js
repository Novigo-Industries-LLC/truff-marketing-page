import { VStack, Image } from "@chakra-ui/react";
import FancyButton from "../recipes/fancy-button";
import { TruffProductCardText } from "../typography";

const ProductItem = ({ name, image, btnText, link, ...props }) => {
    return (
        <VStack w={{ base: '90%', md: '40%', lg: '30%' }} boxShadow="0.025em 0.025em 0.025em 0.05em #0E0E0E" h={{ base: "20em", lg: "35em"}} {...props}>
            <Image 
                h="70%"
                w="100%"
                src={image}
                alt={name}
                boxShadow="0em 0.025em 0.025em 0.05em #0E0E0E"
            />
            <TruffProductCardText>{name}</TruffProductCardText>
            <FancyButton onClick={() => window.open(link, '_blank')} text={btnText} styles={{marginTop: '1.5em', marginBottom: "3em"}}/>
        </VStack>
    );
}

export default ProductItem;