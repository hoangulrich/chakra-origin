import Layout from "./Layout";
import {
  Button,
  Text,
  Heading,
  Box,
  Flex,
  Grid,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <Layout>
      <Text my="7">Create a Card</Text>
      <Text mb="7">Choose a Path</Text>
      <HStack>
        <Button>
          <Link to="/create/farmer">Farmer</Link>
        </Button>
        <Button>Shinobi</Button>
      </HStack>
    </Layout>
  );
};

export default Create;
