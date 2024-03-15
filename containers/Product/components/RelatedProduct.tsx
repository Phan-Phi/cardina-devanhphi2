"use client";

import HeaderTitle from "@/components/HeaderTitle";
import CardProduct from "@/compositions/Card/CardProduct";
import Slick from "@/compositions/Slick/Slick";
import { Box, SimpleGrid, chakra } from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

interface Props {
  initialData: any;
}

export default function RelatedProduct({ initialData }: Props) {
  const { title, description, products } = initialData;

  const render = useMemo(() => {
    if (products.data.length === 0) return;

    return products.data.map((el: any, idx: number) => {
      return <CardProduct key={idx} initialDataCard={el} />;
    });
  }, [products]);

  if (products.data.length === 0) return;

  return (
    <Box>
      <HeaderTitle title={title} content={description} />

      {/* <SimpleGrid columns={{ md: 5 }} gap={3.5}>
        {render}
      </SimpleGrid> */}

      <WrapperSlick>
        <Slick variant="multiple" props={{ dots: false }}>
          {render}
        </Slick>
      </WrapperSlick>
    </Box>
  );
}

const WrapperSlick = chakra(Box, {
  baseStyle: {
    "& .slick-track": {
      display: "flex",
      margin: "0.3rem 0",
      // gap: "1rem",
    },
    "& .slick-slide": {
      padding: "0 0.5rem",
    },

    "& .slick-active": {
      "& .WrapperItemCard": {
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      },
    },
  },
});
