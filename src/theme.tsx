import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: "0 auto",
        padding: "0 0",
        color: "gray.700",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
});

export default theme;
