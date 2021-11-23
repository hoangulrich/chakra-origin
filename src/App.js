import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import theme from "./utils/theme";
import Collection from "./components/Collection";
import Create from "./components/Create";
import Farmer from "./components/Farmer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create/farmer" element={<Farmer />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
