"use client";

import {
  Box,
  Stack,
  chakra,
  BoxProps,
  ChakraComponent,
  ComponentWithAs,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

import { Image } from "@/components";

interface StyledBox extends BoxProps {
  active: boolean;
}

interface Props {
  data: any;
}

export default function RenderMedia({ data }: Props) {
  const _images = get(data, "images");

  const render = useMemo(() => {
    if (_images.length > 1) {
      return _images.map((el: any, idx: number) => {
        const _url = get(el, "image.data.attributes.url");

        return (
          <WrapperImage key={idx}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_url}`}
              ratio="65/37.2"
              imageProps={{ alt: el.alt }}
            />
          </WrapperImage>
        );
      });
    }

    return _images.map((el: any, idx: number) => {
      const _url = get(el, "image.data.attributes.url");

      return (
        <WrapperImage key={idx}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_url}`}
            ratio="65/37.2"
            imageProps={{ alt: el.alt }}
          />
        </WrapperImage>
      );
    });
  }, [_images]);

  return <Wrapper active={_images.length > 1 ? false : true}>{render}</Wrapper>;
}

const Wrapper: ChakraComponent<ComponentWithAs<"div", StyledBox>, {}> = chakra(
  Box,
  {
    shouldForwardProp: (props) => !["active"].includes(props),
    baseStyle(props) {
      const _active = get(props, "active");
      const theme = props.theme;

      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: _active ? "center" : "flex-start",
        gap: "0.5rem",
        marginBottom: "2.5rem",

        [theme.breakpoints.smDown]: {
          marginBottom: "1rem",
        },
      };
    },
  }
);

const WrapperImage = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      width: "60%",

      "& img": {
        width: "100%",
        objectFit: "contain",
      },

      [theme.breakpoints.smDown]: {
        width: "100%",
      },
    };
  },
});
