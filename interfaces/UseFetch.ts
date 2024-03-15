import { AxiosError } from "axios";

type ResponseType<T> = {
  data: any;
  meta: any;
};

type ResponseErrorType<T = any> = AxiosError<T>;

export type { ResponseType, ResponseErrorType };
