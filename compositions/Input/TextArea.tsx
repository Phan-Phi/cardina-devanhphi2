import {
  Box,
  chakra,
  InputGroup,
  ExtendTheme,
  TextareaProps,
  InputRightElement,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

//   import {
//     INPUT_RGBA_DARK,
//     INPUT_RGBA_ERROR,
//     INPUT_RGBA_LIGHT,
//     BOX_SHADOW_INPUT_DARK,
//     BOX_SHADOW_INPUT_LIGHT,
//     INPUT_RGBA_FOCUS_DARK,
//     INPUT_RGBA_FOCUS_LIGHT,
//     BORDER_RGBA,
//   } from "@/constants";
import { COLORS } from "@/hocs/colors";
import SVG from "@/components/SVG";

interface ExtendTextareaProps extends TextareaProps {
  errorIcon: boolean;
}

const TextArea = forwardRef<
  HTMLTextAreaElement | undefined,
  ExtendTextareaProps
>(function TextArea(props, ref) {
  const { errorIcon, ...restProps } = props;

  return (
    <InputGroup>
      <StyledInput
        {...restProps}
        focusBorderColor="transparent !important"
        ref={ref}
      />

      <InputRightElement hidden={errorIcon}>
        <Box mt="3.5px">{/* <SVG src="/svg/error.svg" /> */}</Box>
      </InputRightElement>
    </InputGroup>
  );
});

const StyledInput = chakra(ChakraTextarea, {
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

export default TextArea;
