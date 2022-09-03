import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarWithNavbar from "./component/SidebarWithNavbar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Contracts from "./pages/Contracts";
import Property from "./pages/Property";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Container maxW="100%" h="100vh" bg="gray.200" p="0px 0px">
          <SidebarWithNavbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/propiedades" element={<Property />} />
              <Route path="/contratos" element={<Contracts />} />
            </Routes>
          </SidebarWithNavbar>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
};
