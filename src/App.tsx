import React from "react";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <ChakraProvider resetCSS theme={theme}>
            <Home />
          </ChakraProvider>
        </ThemeProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
