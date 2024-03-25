import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ContactSchemaProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSchema = () => {
  return yupResolver(
    object().shape({
      name: string().required(),
      email: string().required().email("Định dạng email sai"),
      subject: string().required(),
      message: string().required(),
    })
  );
};

export const DefaultContactFormState = () => {
  return {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
