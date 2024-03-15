import { Theme } from "@chakra-ui/react";

declare module "@chakra-ui/theme" {
  interface ExtendTheme extends Theme {
    colors: Theme["colors"] & {
      primary: {
        main: string;
        light: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
    };

    breakpoints: Theme["breakpoints"] & {
      base: string;
      smDown: string;
      smUp: string;
      mdDown: string;
      mdUp: string;
      lgDown: string;
      lgUp: string;
      xl: string;
      "2xl": string;
    };
  }
}
