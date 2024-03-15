import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";

type TOAST_STATUS = "info" | "warning" | "success" | "error" | "loading";

const useNotify = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const toastCustom = useCallback(
    (status: TOAST_STATUS, message: string) => {
      toast({
        duration: 3000,
        status: status,
        isClosable: true,
        description: message,
        position: "bottom-right",
      });
    },
    [toast]
  );

  const toastSuccess = useCallback(
    (message: string) => {
      toast({
        containerStyle: { color: "white" },
        duration: 3000,
        status: "success",
        isClosable: true,
        description: message,
        position: "bottom-right",
      });
    },
    [toast]
  );

  const toastError = useCallback(
    (error: any) => {
      const message = error.response?.data?.message;

      toast({
        containerStyle: { color: "white" },
        duration: 3000,
        status: "error",
        isClosable: true,
        description: message,
        position: "bottom-right",
      });
    },
    [toast]
  );

  return { toastCustom, toastSuccess, toastError, loading, setLoading };
};

export default useNotify;
