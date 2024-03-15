import { useCallback } from "react";
import { useMountedState } from "react-use";
import { Controller, useForm } from "react-hook-form";
import { Box, SimpleGrid, chakra } from "@chakra-ui/react";

import FormControl from "@/compositions/Input/FormControl";
import FormControlTextarea from "@/compositions/Input/FormControlTextarea";
import {
  ContactSchema,
  ContactSchemaProps,
  DefaultContactFormState,
} from "@/yups/contact";
import { useNotification } from "@/hooks/useNotification";
import axios from "axios.config";
import LoadingButton from "@/components/Button/LoadingButton";
import useNotify from "@/hooks/useNotify";

export default function FormContact() {
  const isMounted = useMountedState();
  const { toastSuccess, toastError, loading, setLoading } = useNotify();

  const { control, handleSubmit, reset } = useForm({
    resolver: ContactSchema(),
    defaultValues: DefaultContactFormState(),
  });

  const onSubmit = useCallback(async (values: any) => {
    try {
      setLoading(true);

      return;
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/contacts`, {
        data: { ...values },
      });
      toastSuccess(
        "Your message has been successfully sent. We will contact you very soon!"
      );

      reset(DefaultContactFormState, {
        keepDirty: false,
      });
    } catch (err) {
      toastError(err);
    } finally {
      if (isMounted()) {
        setLoading(false);
      }
    }
  }, []);

  return (
    <Wrapper as="form">
      <WrapperForm>
        <SimpleGrid
          columns={{ base: 2, sm: 2 }}
          gap={{ base: 2, sm: 1, md: 2 }}
        >
          <Controller
            control={control}
            name="name"
            render={(props) => {
              return <FormControl controlState={props} placeholder="Name" />;
            }}
          />
          <Controller
            control={control}
            name="email"
            render={(props) => {
              return <FormControl controlState={props} placeholder="Email" />;
            }}
          />
        </SimpleGrid>

        <Controller
          control={control}
          name="subject"
          render={(props) => {
            return <FormControl controlState={props} placeholder="Subject" />;
          }}
        />

        <Controller
          control={control}
          name="message"
          render={(props) => {
            return (
              <FormControlTextarea
                controlState={props}
                placeholder="Your message"
              />
            );
          }}
        />
      </WrapperForm>

      <LoadingButton
        loading={loading}
        buttonProps={{
          type: "submit",
          onClick: handleSubmit(onSubmit),
        }}
      />
    </Wrapper>
  );
}

const Wrapper = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      padding: "0 17.8rem",
      textAlign: "center",

      [theme.breakpoints.mdDown]: {
        padding: "0 10.5rem",
      },

      [theme.breakpoints.smDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperForm = chakra(Box, {
  baseStyle: {
    marginBottom: "0.5rem",
  },
});
