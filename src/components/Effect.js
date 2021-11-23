import { Text, Box, Flex, Icon, Badge } from "@chakra-ui/react";

const Effect = ({ effect }) => {
  return (
    <Badge colorScheme="green">
      <Text>{effect}</Text>
    </Badge>
  );
};

export default Effect;
