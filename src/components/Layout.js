import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">{children}</Container>
    </>
  );
};

export default Layout;
