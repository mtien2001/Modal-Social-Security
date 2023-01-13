import React from "react";
import { ModalSocialSecurity } from "./pages/components/elements/modal_social_security";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { useFetchModalDetial } from "./hooks";

function App(props: any) {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <ChakraProvider resetCSS theme={theme}>
          <ModalSocialSecurity {...useFetchModalDetial(props)} />
        </ChakraProvider>
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
