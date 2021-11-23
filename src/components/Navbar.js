import { Text, Button, Flex, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex p="5" justifyContent="space-between" backgroundColor="blue">
      <Text>
        <Link to="/">Chakra Origin</Link>
      </Text>
      <HStack>
        <Button>
          <Link to="/collection">Collection</Link>
        </Button>
        <Button>
          <Link to="/expedition">Expedition</Link>
        </Button>
        <Button>
          <Link to="/gacha">Gacha</Link>
        </Button>
        <Button colorScheme="red">
          <Link to="/login">Login</Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
