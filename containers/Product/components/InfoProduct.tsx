"use client";

import { Link } from "@/components";
import Price from "@/components/Price";
import Prices from "@/components/Prices";
import RenderText from "@/compositions/RenderHTML/RenderText";
import { Box, Button, Heading, Stack, chakra } from "@chakra-ui/react";

interface Props {
  dataInfo: any;
  dataPrice: number;
  discountPrice: number;
  purchaseURL: string;
}

export default function InfoProduct({
  dataInfo,
  dataPrice,
  purchaseURL,
  discountPrice,
}: Props) {
  const { metaTitle, metaDescription } = dataInfo;

  return (
    <Box>
      <WrapperTitle>
        <Title variant="h5">{metaTitle}</Title>
        {/* <Stack flexDirection="row">
          <Price number={discountPrice} />
          <Price activeLineThrough={true} number={dataPrice} />
        </Stack> */}

        <Prices discountPrice={discountPrice} dataPrice={dataPrice} />
      </WrapperTitle>

      <WrapperContent>
        <Heading variant="title-s">Description:</Heading>
        <RenderText data={metaDescription} />
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
  baseStyle: {
    marginBottom: "0.5rem",
  },
});

// const Price = chakra(Heading, {
//   baseStyle: {},
// });
