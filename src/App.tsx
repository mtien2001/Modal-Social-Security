import React, { ReactNode } from "react";
import { ModalSocialSecurityDiagnosis } from "./pages/components/elements/ModalSocialSecurity";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { QueryClient } from "@tanstack/react-query";

function QueryClientProvider(props: {
  client: QueryClient;
  children: ReactNode;
}) {
  return null;
}

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
            <ModalSocialSecurityDiagnosis />
          </ChakraProvider>
        </ThemeProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
