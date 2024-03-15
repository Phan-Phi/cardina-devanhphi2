import React, { Fragment } from "react";

import { Button, ButtonProps, chakra } from "@chakra-ui/react";

type LoadingButtonProps = {
  loading: boolean;
  buttonProps?: ButtonProps;
  title?: string;
};

export default function LoadingButton(props: LoadingButtonProps) {
  const { loading, buttonProps, title = "button.submit" } = props;

  return (
    <Fragment>
      {loading ? (
        <StyledLoading variant="solid" isLoading>
          Submiting...
        </StyledLoading>
      ) : (
        <StyledButton variant="solid" {...buttonProps}>
          SEND
        </StyledButton>
      )}
    </Fragment>
  );
}

// const Loading = () => {
//   return <CircularProgress sx={{ color: "white" }} size={16} />;
// };

const StyledLoading = chakra(Button, {
  baseStyle: {
    userSelect: "none",
    pointerEvents: "none",
    textTransform: "capitalize",
  },
});

const StyledButton = chakra(Button, {
  baseStyle: {
    textTransform: "capitalize",
  },
});
