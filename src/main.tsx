import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
    ></ColorModeScript>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
