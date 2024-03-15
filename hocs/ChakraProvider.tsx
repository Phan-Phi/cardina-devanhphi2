"use client";

import { theme } from "./theme";
import {
  localStorageManager,
  cookieStorageManagerSSR,
  ChakraProvider as OriginalChakraProvider,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const ChakraProvider = ({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies: any;
}) => {
  const colorModeManager = cookieStorageManagerSSR(cookies) || localStorageManager;

  return (
    <CacheProvider>
      <OriginalChakraProvider resetCSS colorModeManager={colorModeManager} theme={theme}>
        {children}
      </OriginalChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;
