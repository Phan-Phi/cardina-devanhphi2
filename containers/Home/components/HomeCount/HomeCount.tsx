"use client";

import { get } from "lodash";
import { useMemo, useState } from "react";
import { Box, Container, Flex, Stack, chakra } from "@chakra-ui/react";

import CountItem from "./Countitem";

import { Image } from "@/components";

interface Props {
  initialData: any;
}

export default function HomeCount({ initialData }: Props) {
  const arrProperties = get(initialData, "properties");

  const render = useMemo(() => {
    return arrProperties.map((el: any, idx: number) => {
      return <CountItem key={idx} dataCountItem={el} />;
    });
  }, [arrProperties]);

  return (
    <WrapperContainer>
      <Background />

      <Container>
        <WrapperFlex alignItems="center" gap={14}>
          <WrapperImage>
            <Image src="/img/single-product 1.png" ratio="2.28/2.95" />
          </WrapperImage>

          <WrapperStackContent>{render}</WrapperStackContent>
        </WrapperFlex>
      </Container>
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      position: "relative",
      marginBottom: "5rem",

      [theme.breakpoints.smDown]: {
        background: "black",
        padding: "2.5rem 0",
      },
    };
  },
});

const WrapperFlex = chakra(Flex, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      [theme.breakpoints.smDown]: {
        gap: "2.5rem",
      },

      [theme.breakpoints.mdDown]: {
        gap: "1.25rem",
      },
    };
  },
});

const Background = chakra(Box, {
  baseStyle: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
    height: "180px",
    background: "black",
    zIndex: -1,
  },
});

const WrapperImage = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      width: "228px",
      height: "295px",
      [theme.breakpoints.smDown]: {
        width: "200px",
        height: "250px",
      },
    };
  },
});

const WrapperStackContent = chakra(Stack, {
  baseStyle(props) {
    const theme = props.theme;

    return {
      flexDirection: "row",
      flexGrow: 1,
      justifyContent: "space-between",

      [theme.breakpoints.mdDown]: {
        gap: "6rem",
        justifyContent: "flex-start",
      },

      [theme.breakpoints.smDown]: {
        flexDirection: "column",
        gap: "2.5rem",
      },
    };
  },
});
