import Layout from "./Layout";
import {
  Button,
  Text,
  Heading,
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cardData from "../data/cardData";
import effectData from "../data/effectData";
import Card from "./Card";
import Effect from "./Effect";

const Farmer = () => {
  return (
    <Layout>
      <Text my="7">Farmer Creation</Text>
      <Box backgroundColor="teal" w="100%" minH="70vh" p="7">
        <Flex justifyContent="space-between">
          <Box backgroundColor="black" minH="360" minW="230">
            Card Here
          </Box>
          <VStack backgroundColor="pink">
            {effectData.map((effect, index) => {
              return <Effect effect={effect.title} />;
            })}
          </VStack>
        </Flex>
        <HStack gap="7" my="7">
          <Text>Canvas</Text>
          {cardData.map((card, index) => {
            return <Card title={card.title} />;
          })}
        </HStack>
      </Box>
      <Button>Save to NFT</Button>
    </Layout>
  );
};

export default Farmer;
