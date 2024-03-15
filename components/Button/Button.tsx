"use client";

import { Button, ButtonProps, chakra } from "@chakra-ui/react";

interface Props {
  title: string;
  variant?: string;

  props?: ButtonProps;
}

export default function Btn({ title, variant = "solid", props }: Props) {
  return (
    <StyledButton variant={variant} {...props}>
      {title}
    </StyledButton>
  );
}

const StyledButton = chakra(Button, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      height: "35px !important",
      [theme.breakpoints.smDown]: {},
    };
  },
});
