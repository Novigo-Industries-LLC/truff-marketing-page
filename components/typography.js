import { Text} from '@chakra-ui/react';

const TruffText = ({ children, ...props}) => (
    <Text fontFamily="Inter" color="#1a1a1a" {...props}>
        {children}
    </Text>
);

export const TruffleTitleLgText = ({ children, ...props }) => (
    <TruffText fontSize={{ base: '2.5em', lg: "3em"}} lineHeight="3.5em" {...props}>
        {children}
    </TruffText>    
);

export const TruffTitleText = ({ children, ...props}) => (
    <TruffText fontSize={{ base: '1.5em', lg: "2em"}} lineHeight="2.5em" {...props}>
        {children}
    </TruffText>
);

export const TruffleTitleLightLgText = ({ children, ...props }) => (
    <TruffText fontSize={{ base: '2.5em', lg: "3em"}} lineHeight="3.5em" fontWeight="300" {...props}>
        {children}
    </TruffText>    
);

export const TruffTitleLightText = ({ children, ...props}) => (
    <TruffText fontSize={{ base: '1.5em', lg: "2em"}} lineHeight="2.5em" fontWeight="300" {...props}>
        {children}
    </TruffText>
);

export const TruffProductCardText = ({ children, ...props }) => (
    <TruffText fontSize={{ base: "1em", lg: "1.5em"}} lineHeight="1.5em" {...props}>
        {children}
    </TruffText>
);


export const TruffBodyText = ({ children, ...props }) => (
    <TruffText fontSize="1em" lineHeight="1.5em" {...props}>
        {children}
    </TruffText>
);
