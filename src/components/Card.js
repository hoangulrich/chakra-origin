import { Text, Heading, Image, Box, Flex } from "@chakra-ui/react";

const Card = ({ title }) => {
  return (
    <Box minH="230" minW="150" backgroundColor="orange">
      <Text>{title}</Text>
      <Image alt={title} />
    </Box>
  );
};

export default Card;
