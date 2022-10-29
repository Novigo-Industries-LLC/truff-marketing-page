import { HStack, Image } from '@chakra-ui/react';

const Sponsors = () => {
    return (
        <HStack>
            <Image src="https://www.truff.com/svg/press-rolling-stone-logo.svg" alt="Roling Stones" />
            <Image src="https://www.truff.com/svg/press-today-logo.svg" alt="Today Show" />
            <Image src="https://www.truff.com/svg/press-today-logo.svg" alt="Good Morning America" />
            <Image src="https://www.truff.com/svg/press-forbes-logo.svg" alt="Forbes" />
            <Image src="https://www.truff.com/svg/press-food-and-wine-logo.svg" alt="Food & Wine" />
            <Image src="https://www.truff.com/svg/press-highsnobiety-logo.svg" alt="Highsnobiety" />
            <Image src="https://www.truff.com/svg/press-cnn-logo.svg" alt="CNN" />
        </HStack>
    );
}

export default Sponsors;