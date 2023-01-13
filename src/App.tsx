import React from "react";
import { Modal } from "./pages/components/elements/modal";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <ChakraProvider resetCSS theme={theme}>
          <Modal />
        </ChakraProvider>
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
