"use client";

import {
  FormLabel,
  TextareaProps,
  FormLabelProps,
  FormHelperTextProps,
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
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
      return "demo";
    }
    if (error.type === name) {
      return "demo";
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
        _placeholder={{ opacity: 1, color: "black" }}
        autoComplete="off"
        errorIcon={!error}
        resize="none"
        height="150px"
        focusBorderColor="transparent"
        {...InputProps}
      />

      {/* <FormHelperTextBase {...FormHelperTextProps}>
        {error && (renderError as any)}
      </FormHelperTextBase> */}
    </ChakraFormControl>
  );
}
