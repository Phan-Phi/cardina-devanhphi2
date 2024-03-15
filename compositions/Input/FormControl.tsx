"use client";

import {
  FormLabel,
  InputProps,
  FormLabelProps,
  FormHelperTextProps,
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  Input,
  Heading,
} from "@chakra-ui/react";
// import { useIntl } from "react-intl";
import React, { useMemo } from "react";
import { UseControllerReturn } from "react-hook-form";

// import { FormHelperTextBase } from "..";
import InputBase from "./InputBase";

type FormControlBaseProps = {
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: ChakraFormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
};

type FormControlProps = {
  controlState: any;
  label?: React.ReactNode;
  placeholder?: string;
} & FormControlBaseProps;

export default function FormControl(props: FormControlProps) {
  const {
    FormControlProps,
    FormLabelProps,
    FormHelperTextProps,
    InputProps,
    controlState,
    label,
    placeholder,
  } = props;

  //   const { messages } = useIntl();

  const { field, fieldState } = controlState as UseControllerReturn;
  const { name, onBlur, onChange, ref, value } = field;
  const { error } = fieldState;

  const renderError = useMemo(() => {
    if (error == undefined) return null;

    if (error.type === "required") {
      return error.message;
    }
  }, [error, name]);

  return (
    <ChakraFormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <InputBase
        focusBorderColor="transparent"
        ref={ref}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        errorIcon={!error}
        autoCapitalize="none"
        _placeholder={{ opacity: 1, color: "black" }}
        {...InputProps}
      />

      <Heading variant="p5" textAlign="left" color="red">
        {error && (renderError as any)}
      </Heading>

      {/* <FormHelperTextBase {...FormHelperTextProps}>
        {error && (renderError as any)}
      </FormHelperTextBase> */}
    </ChakraFormControl>
  );
}
