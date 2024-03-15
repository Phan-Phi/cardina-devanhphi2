"use client";

import {
  Box,
  ExtendTheme,
  Heading,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

import { Image, Link } from "@/components";

import Btn from "@/components/Button/Button";
import Slick from "@/compositions/Slick/Slick";

interface Props {
  data: any;
}

export default function HomeBannerMobile({ data }: Props) {
  const { banners, shortDescription, subTitle, title } = data;

  const render = useMemo(() => {
    return banners.map((el: any, idx: number) => {
      const _url = get(el, "image.data.attributes.url");

      return (
        <Link href={el.Link ? el.Link : "/"} target="_blank" key={idx}>
          <WrapperImage>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_url}`}
              ratio="650/372"
            />
          </WrapperImage>
        </Link>
      );
    });
  }, [banners]);
  return (
    <WrapperGrid columns={{ base: 1 }}>
      <WrapperContent>
        <WrapperTitle>
          <Title variant="p1">{title}</Title>
          <SubTitle variant="p4">{subTitle}</SubTitle>
        </WrapperTitle>

        <Text variant="p6">{shortDescription}</Text>

        <Link href="/about">
          <Btn title="EXPLORE"></Btn>
        </Link>
      </WrapperContent>

      <Box>
        <Slick>{render}</Slick>
      </Box>
    </WrapperGrid>
  );
}

const WrapperGrid = chakra(SimpleGrid, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;

    return {
      [theme.breakpoints.smUp]: {
        display: "none",
      },
    };
  },
});

const WrapperContent = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;

    return {
      [theme.breakpoints.smDown]: {
        marginBottom: "3rem",
      },
    };
  },
});

const WrapperImage = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      padding: "0.25rem",
      "& div": {
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",

        "& img": {
          borderRadius: "6px",
        },
      },
    };
  },
});

const WrapperTitle = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      borderLeft: `4px solid ${_theme.colors.primary.main}`,
      paddingLeft: "1rem",
    };
  },
});

const Title = chakra(Heading, {
  baseStyle: {
    textTransform: "uppercase",
    color: "primary.main",
  },
});

const SubTitle = chakra(Heading, {
  baseStyle: {
    color: "primary.main",
  },
});

const Text = chakra(Heading, {
  baseStyle: {
    padding: "1.5rem 0",
  },
});
