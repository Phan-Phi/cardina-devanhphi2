"use client";

import { get } from "lodash";
import { useRouter } from "next/navigation";
import { Box, ExtendTheme, Heading, Stack, chakra } from "@chakra-ui/react";

import { Image } from "@/components";

import Btn from "@/components/Button/Button";
import Price from "@/components/Price";

interface Props {
  initialDataCard: any;
}

export default function CardProduct({ initialDataCard }: Props) {
  const { push } = useRouter();

  const title = get(initialDataCard, "attributes.pageinfo.title");
  const slug = get(initialDataCard, "attributes.pageinfo.slug");
  const price = get(initialDataCard, "attributes.price");

  return (
    <WrapperItem className="WrapperItemCard">
      <WrapperImage>
        <Image src="/img/product.png" ratio="1/1" />
      </WrapperImage>

      <WrapperInfo gap={0}>
        <NameProduct variant="p3">{title}</NameProduct>

        <Price variant="p6" number={price} />
      </WrapperInfo>

      <Btn
        title="See More"
        variant="outline"
        props={{
          width: "100%",
          onClick: () => {
            push(`/products/${slug}`);
          },
        }}
      ></Btn>
    </WrapperItem>
  );
}

const WrapperItem = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      padding: "1rem",
      borderRadius: "6px",
      border: `1.5px solid ${_theme.colors.primary.light}`,
      background: "white",
      boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
    };
  },
});

const WrapperInfo = chakra(Stack, {
  baseStyle() {
    return {
      marginBottom: "1.5rem",
    };
  },
});

const WrapperImage = chakra(Box, {
  baseStyle() {
    return {
      marginBottom: "1.5rem",
    };
  },
});

const NameProduct = chakra(Heading, {
  baseStyle() {
    return {
      textAlign: "left",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      minHeight: 21.6 * 2,
    };
  },
});
