"use client";

import { Heading, chakra } from "@chakra-ui/react";

interface Props {
  number: number;
  variant?: string;
  activeLineThrough?: boolean;
}

export default function Price({
  number,
  variant = "p3",
  activeLineThrough = false,
}: Props) {
  const data = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return (
    <Count
      color="primary.main"
      textDecorationLine={activeLineThrough ? "line-through" : "none"}
      variant={variant}
      width="max-content"
    >
      {data}
    </Count>
  );
}

const Count = chakra(Heading, {
  baseStyle: {},
});
