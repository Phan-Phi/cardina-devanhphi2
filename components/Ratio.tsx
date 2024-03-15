import { Box, BoxProps } from "@chakra-ui/react";
import { split } from "lodash";
import { ReactNode, forwardRef } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
  ratio: string;
}

const Ratio = forwardRef<HTMLDivElement | undefined, Props>(
  function Ratio(props, ref) {
    const { ratio, children, ...restProps } = props;
    const splitRatio = split(ratio, "/");

    return (
      <Box
        ref={ref}
        position="relative"
        paddingBottom={`calc(${splitRatio[1]} / ${splitRatio[0]} * 100%)`}
        {...restProps}
      >
        {children}
      </Box>
    );
  }
);

export default Ratio;
