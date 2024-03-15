"use client";

import { get } from "lodash";
import { forwardRef } from "react";
import { BoxProps, chakra, Box as ChakraBox } from "@chakra-ui/react";

type VariantType = "centerCenter" | "spaceBetweenCenter";

export interface ExtendedBoxProps extends BoxProps {
  variant?: VariantType;
}

const Box = forwardRef<HTMLDivElement | undefined, ExtendedBoxProps>(
  function Box(props, ref) {
    return <StyledBox {...props} ref={ref} />;
  }
);

const StyledBox = chakra(ChakraBox, {
  shouldForwardProp: (prop) => !["variant"].includes(prop),
  baseStyle(props) {
    const variant = get(props, "variant");

    return {
      ...(variant === "centerCenter" && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      ...(variant === "spaceBetweenCenter" && {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }),
    };
  },
});

export default Box;
