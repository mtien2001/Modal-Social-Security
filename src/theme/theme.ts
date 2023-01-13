import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";

const fonts = {
  body: `"Noto Sans JP", sans-serif`
};

export const theme = extendTheme({
  fonts,
  breakpoints
});

export type TTheme = typeof theme;
