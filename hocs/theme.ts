import {
  extendTheme,
  ThemeOverride,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { Lato } from "next/font/google";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

import { COLORS } from "./colors";
import { Greycliffcf } from "./fonts";

export const initConfigColorMode = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: true,
} as const;

export const baseFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--base-font",
});

export const theme = extendTheme(
  {
    styles: {
      global: ({ colorMode, theme }) => {
        return {
          "::selection": {
            bg: "primary.200",
          },

          "#nprogress .bar": {
            bg: `var(--chakra-colors-primary-500) !important`,
          },
          "object-fit-contain": {
            objectFit: "contain",
          },
        };
      },
    },

    fonts: {
      heading: "var(--base-font)",
      body: "var(--base-font)",
    },
    textStyles: {},
    fontSizes: {},

    config: initConfigColorMode,
    colors: {
      primary: {
        main: COLORS.primary.main,
        light: COLORS.secondary.main,
        dark: COLORS.secondary.dark,
      },

      secondary: {
        main: COLORS.secondary.main,
      },

      black: {
        "50": COLORS.black["50"],
      },
      white: {
        "50": COLORS.white["50"],
      },

      text: {
        light: COLORS.white["50"],
        dark: COLORS.black["50"],
      },
    },

    semanticTokens: {
      colors: {},
    },

    sizes: {
      lg: "1048px",
      xl: "1280px",
      container: {
        xxl: "1280px",
        xl: "1248px",
      },
    },

    components: {
      // Input: {
      //   defaultProps: {
      //     focusBorderColor: "transparent",
      //   },
      // },

      Button: {
        baseStyle: {
          fontSize: "12px !important",
          lineHeight: "14px",
          fontWeight: 700,
          height: "35px !important",
        },
        variants: {
          outline: {
            fontSize: "12px !important",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "1rem",
            borderColor: COLORS.primary.main,
            padding: "0 2rem",
            color: COLORS.primary.main,

            _hover: {
              opacity: 0.8,
              background: "transparent",
            },

            _active: {
              background: "transparent",
            },
          },

          solid: {
            fontSize: "12px !important",
            borderRadius: "1rem",
            color: COLORS.white["50"],
            backgroundColor: COLORS.primary.main,
            padding: "0 2rem",
            _hover: {
              opacity: 0.8,
            },
          },
        },
      },

      Container: {
        baseStyle: {
          maxW: "1048px",
        },
      },

      Heading: {
        defaultProps: {
          color: COLORS.black["50"],
          fontSize: "0.75rem",
        },
        variants: {
          h1: {
            fontSize: "72px",
            lineHeight: "86.4px",
            fontWeight: 400,
          },
          h2: {
            fontSize: "64px",
            lineHeight: "64px",
            fontWeight: 400,
          },
          h3: {
            fontSize: "52px",
            lineHeight: "52px",
            fontWeight: 400,
          },
          h4: {
            fontSize: "36px",
            lineHeight: "43.2px",
            fontWeight: 400,
          },
          h5: {
            fontSize: "30",
            lineHeight: "36px",
            fontWeight: 400,
          },
          h6: {
            fontSize: "24px",
            lineHeight: "28.8px",
            fontWeight: 400,
          },
          "title-s": {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: 400,
          },
          "title-ss": {
            fontSize: "14px",
            lineHeight: "16.8px",
            fontWeight: 400,
          },

          p1: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "36px",
            lineHeight: "43.2px",
            fontWeight: 400,
          },
          p2: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "24px",
            lineHeight: "28.8px",
            fontWeight: 400,
          },
          p3: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "18px",
            lineHeight: "21.6px",
            fontWeight: 400,
          },
          p4: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: 400,
          },
          p5: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
          },
          p6: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "12px",
            lineHeight: "14.4px",
            fontWeight: 400,
          },
          p7: {
            fontFamily: Greycliffcf.style.fontFamily,
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: 300,
          },
        },
      },
    },

    breakpoints: {
      base: "0em", // 0px

      smDown: "@media screen and (max-width: 430px)",
      smUp: "@media screen and (min-width: 430px)",

      mdDown: "@media screen and (max-width: 900px)",
      mdUp: "@media screen and (min-width: 900px)",

      lgDown: "@media screen and (max-width: 1280px)",
      lgUp: "@media screen and (min-width: 1280px)",

      xl: "80em", // ~1280px
      "2xl": "96em", // ~1536px
    },
  } as ThemeOverride,

  withDefaultColorScheme({ colorScheme: "brand", components: ["Button"] }),
  withProse({
    baseStyle: {
      "ul>li::marker, ol>li::marker": {
        color: "black",
      },
      h1: {},
      h2: {},
      h3: {},
      p: {
        marginTop: 0,
        marginBottom: 0,

        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
      },
    },
  })
) as ThemeOverride;

// const breakpoints = {
//   base: "0em", // 0px
//   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//   md: "48em", // ~768px
//   lg: "62em", // ~992px
//   xl: "80em", // ~1280px
//   "2xl": "96em", // ~1536px
// };
