"use client";

import { Heading, chakra } from "@chakra-ui/react";

interface Props {
  number: number;
  variant?: string;
}

export default function Price({ number, variant = "p3" }: Props) {
  const data = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return (
    <Count color="primary.main" variant={variant} width="max-content">
      {data}
    </Count>
  );
}

const Count = chakra(Heading, {
  baseStyle: {},
});
