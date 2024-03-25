"use client";

import {
  FormLabel,
  TextareaProps,
  FormLabelProps,
  FormHelperTextProps,
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  Heading,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { UseControllerReturn } from "react-hook-form";

import TextArea from "./TextArea";

type FormControlBaseProps = {
  InputProps?: TextareaProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: ChakraFormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
};

type FormControlProps = {
  controlState: any;
  label?: React.ReactNode;
  placeholder?: string;
} & FormControlBaseProps;

export default function FormControlTextarea(props: FormControlProps) {
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

      <TextArea
        ref={ref}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 0.4, color: "black", fontSize: "12px" }}
        autoComplete="off"
        errorIcon={!error}
        resize="none"
        height="150px"
        focusBorderColor="transparent"
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
