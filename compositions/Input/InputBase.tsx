"use client";

import {
  Input,
  chakra,
  InputProps,
  InputGroup,
  ExtendTheme,
  InputRightElement,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

// import {
//   INPUT_RGBA_DARK,
//   INPUT_RGBA_LIGHT,
//   INPUT_RGBA_ERROR,
//   BOX_SHADOW_INPUT_DARK,
//   BOX_SHADOW_INPUT_LIGHT,
//   INPUT_RGBA_FOCUS_DARK,
//   INPUT_RGBA_FOCUS_LIGHT,
//   BORDER_RGBA,
// } from "@/constants";
import Box from "@/components/Box";
import SVG from "@/components/SVG";
import { COLORS } from "@/hocs/colors";
import { FaExclamationTriangle } from "react-icons/fa";

interface ExtendInputProps extends InputProps {
  errorIcon: boolean;
}

const InputBase = forwardRef<HTMLInputElement | undefined, ExtendInputProps>(
  function InputBase(props, ref) {
    const { errorIcon, ...restProps } = props;

    return (
      <InputGroup>
        <StyledInput {...restProps} ref={ref} />

        <InputRightElement hidden={errorIcon}>
          <FaExclamationTriangle color="red" />
        </InputRightElement>
      </InputGroup>
    );
  }
);

const StyledInput = chakra(Input, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      padding: "9px 8px",
      borderRadius: "6px",
      border: "1.5px solid",

      height: "44px",
      // caretColor: "#5285FF",
      borderColor: _theme.colors.primary.light,

      fontSize: "12px",
      lineHeight: "14.4px",
      fontWeight: 400,

      // _hover: {
      //   borderColor: "transparent",
      // },
    };
  },
});

export default InputBase;
