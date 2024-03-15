import NextLink from "next/link";
import { MouseEventHandler, useCallback } from "react";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { useLoadingPage } from "@/hooks";

interface LinkProps extends ChakraLinkProps {}

const Link = (props: LinkProps) => {
  const { onClick, ...restProps } = props;
  const { startLoadingPage } = useLoadingPage();

  const extendOnClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      startLoadingPage();
      onClick && onClick(e);
    },
    [onClick, startLoadingPage]
  );

  return <ChakraLink as={NextLink} onClick={extendOnClick} {...restProps} />;
};

export default Link;
