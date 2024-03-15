"use client";

import { Box, Stack, chakra } from "@chakra-ui/react";

import { Footer, Header } from "..";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <WrapperFlex className="WrapperFlex">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </WrapperFlex>
  );
}

const WrapperFlex = chakra(Stack, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      background: "white",
      minHeight: "100vh",
    };
  },
});

const MainContent = chakra(Box, {
  baseStyle() {
    return {
      flexGrow: "1 !important",
    };
  },
});
