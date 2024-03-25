"use client";

import { Heading, Stack, chakra } from "@chakra-ui/react";

interface Props {
  discountPrice: number;
  dataPrice: number;
}

export default function Prices({ discountPrice, dataPrice }: Props) {
  const dataDiscountPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(discountPrice);

  const dataDataPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(dataPrice);

  return (
    <Stack flexDirection="row">
      <Discount variant="p3">{dataDiscountPrice}</Discount>
      <NoDiscount variant="p3">{dataDataPrice}</NoDiscount>
    </Stack>
  );
}

const Discount = chakra(Heading, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      color: theme.colors.primary.main,
    };
  },
});

const NoDiscount = chakra(Heading, {
  baseStyle(props) {
    const theme = props.theme;

    return {
      textDecorationLine: "line-through",
      fontSize: "13px",
      color: theme.colors.primary.main,
    };
  },
});
