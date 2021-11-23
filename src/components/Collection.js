import Layout from "./Layout";
import { Text, Box, Heading, Button, Flex, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <Layout>
      <Text my="7">Collection Page</Text>
      <Button>
        <Link to="/create">Create a Card</Link>
      </Button>
      <Text my="7">Canvas:</Text>
      <Grid></Grid>
      <Text my="7">Flavor:</Text>
      <Grid></Grid>
    </Layout>
  );
};

export default Collection;
