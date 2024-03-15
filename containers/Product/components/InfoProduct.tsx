"use client";

import { Link } from "@/components";
import Price from "@/components/Price";
import RenderText from "@/compositions/RenderHTML/RenderText";
import { Box, Button, Heading, chakra } from "@chakra-ui/react";

interface Props {
  dataInfo: any;
  dataPrice: number;
  purchaseURL: string;
}

export default function InfoProduct({
  dataInfo,
  dataPrice,
  purchaseURL,
}: Props) {
  const { title, description } = dataInfo;

  return (
    <Box>
      <WrapperTitle>
        <Title variant="h5">{title}</Title>
        <Price number={dataPrice} />
      </WrapperTitle>

      <WrapperContent>
        <Heading variant="title-s">Description:</Heading>
        <RenderText data={description} />
      </WrapperContent>

      <Link href={purchaseURL} target="_blank">
        <Button variant="outline">PURCHASE AT AMAZON</Button>
      </Link>
    </Box>
  );
}

const WrapperTitle = chakra(Box, {
  baseStyle: {
    marginBottom: "1.5rem",
  },
});

const WrapperContent = chakra(Box, {
  baseStyle: {
    marginBottom: "2rem",
  },
});

const Title = chakra(Heading, {
  baseStyle: {},
});

// const Price = chakra(Heading, {
//   baseStyle: {},
// });
