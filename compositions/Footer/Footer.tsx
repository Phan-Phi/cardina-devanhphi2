"use client";

import {
  Box,
  Container,
  ExtendTheme,
  Heading,
  Stack,
  chakra,
} from "@chakra-ui/react";
import FooterContent from "./components/FooterContent";
import { Link } from "@/components";

export default function Footer() {
  return (
    <Wrapper>
      <ContainerContent maxW="container.xl">
        <FooterContent />
      </ContainerContent>

      <WrapperPowered direction="row">
        <TextPowered variant="p5">
          Powered by
          <Link
            href="https://t-solution.vn/"
            target="_blank"
            textDecoration="none !important"
          >
            {" "}
            <BoxAsSpanPowered as="span">T-Solution</BoxAsSpanPowered>
          </Link>
        </TextPowered>
      </WrapperPowered>
    </Wrapper>
  );
}

const Wrapper = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      marginTop: "5rem",

      [theme.breakpoints.smDown]: {
        marginTop: "1rem",
      },
    };
  },
});

const ContainerContent = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      padding: "0 1rem",

      [theme.breakpoints.smDown]: {
        padding: "0 1rem",
      },
      [theme.breakpoints.mdDown]: {
        padding: "0 1rem",
      },
    };
  },
});

const WrapperPowered = chakra(Stack, {
  baseStyle: {
    background: "black",
    justifyContent: "center",
  },
});

const TextPowered = chakra(Heading, {
  baseStyle: {
    color: "text.light",
    padding: "4px 0",
  },
});

const BoxAsSpanPowered = chakra(Heading, {
  baseStyle: {
    cursor: "pointer",
    color: "primary.main",
  },
});
