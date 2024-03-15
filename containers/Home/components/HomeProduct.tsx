"use client";

import { useMemo } from "react";
import { Container, ExtendTheme, chakra } from "@chakra-ui/react";

import Box from "@/components/Box";
import Slick from "@/compositions/Slick/Slick";
import HeaderTitle from "@/components/HeaderTitle";
import CardProduct from "@/compositions/Card/CardProduct";

interface Props {
  initialData: any;
}

export default function HomeProduct({ initialData }: Props) {
  const { title, subTitle, shortDescription, products } = initialData;

  const render = useMemo(() => {
    return products.data.map((el: any, idx: number) => {
      return <CardProduct key={idx} initialDataCard={el} />;
    });
  }, [products]);

  return (
    <Wrapper>
      <HeaderTitle
        title={title}
        isActive={true}
        subTitle={subTitle}
        content={shortDescription}
      />

      {/* <SimpleGrid columns={{ md: 5 }} gap={3.5}>
        {render}
      </SimpleGrid> */}

      <WrapperSlick>
        <Slick variant="multiple" count={products.data.length}>
          {render}
        </Slick>
      </WrapperSlick>
    </Wrapper>
  );
}

const Wrapper = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      [theme.breakpoints.mdDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperSlick = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      "& .slick-track": {
        display: "flex",
        // gap: "0.9rem",
        padding: "0.5rem 0",
        // left: "50%",
        // transform: "translateX(-50%)",
      },

      "& .slick-slide": {
        padding: "0 12px",
      },
      // [theme.breakpoints.mdDown]: {
      //   padding: "0 2.5rem",
      // },
    };
  },
});
