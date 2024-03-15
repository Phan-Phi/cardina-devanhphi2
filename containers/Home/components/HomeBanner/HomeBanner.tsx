"use client";

import {
  Box,
  Container,
  ExtendTheme,
  Grid,
  GridItem,
  Heading,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

import { Image, Link } from "@/components";

import Slick from "@/compositions/Slick/Slick";
import HomeBannerMobile from "./HomeBannerMobile";
import Btn from "@/components/Button/Button";

interface Props {
  initialData: any;
}

export default function HomeBanner({ initialData }: Props) {
  const { banners, shortDescription, subTitle, title } = initialData;

  const render = useMemo(() => {
    return banners.map((el: any, idx: number) => {
      const _url = get(el, "image.data.attributes.url");

      return (
        <Link href={el.link ? el.link : "/"} target="_blank" key={idx}>
          <WrapperImage key={idx}>
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
    <Wrapper>
      <StyledGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        alignItems="center"
        gap={4}
      >
        <StyledGridItem rowSpan={1} colSpan={2}>
          <Box>
            <WrapperTitle>
              <Title variant="p1">{title}</Title>
              <SubTitle variant="p4">{subTitle}</SubTitle>
            </WrapperTitle>

            <Text variant="p6">{shortDescription}</Text>

            {/* <Button variant="solid">EXPLORE</Button> */}

            <Link href="/about">
              <Btn title="EXPLORE"></Btn>
            </Link>
          </Box>
        </StyledGridItem>

        <StyledGridItem colSpan={3}>
          <Box>
            <Slick>{render}</Slick>
          </Box>
        </StyledGridItem>
      </StyledGrid>

      <HomeBannerMobile data={initialData} />
    </Wrapper>
  );
}

const Wrapper = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      margin: "10rem auto 5rem auto",

      [theme.breakpoints.smDown]: {
        marginTop: "6.8rem",
      },

      [theme.breakpoints.mdDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperImage = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      padding: "0.3rem",
      "& div": {
        borderRadius: "6px",

        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      },

      "& img": {
        borderRadius: "6px",
      },
    };
  },
});

const StyledGrid = chakra(Grid, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;

    return {
      templateRows: "repeat(1, 1fr)",
      templateColumns: "repeat(5, 1fr)",

      [theme.breakpoints.smDown]: {
        display: "none",
      },
    };
  },
});

const StyledGridItem = chakra(GridItem, {
  baseStyle: {},
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
