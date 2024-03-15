"use client";

import {
  Box,
  chakra,
  BoxProps,
  Container,
  SimpleGrid,
  ExtendTheme,
  ChakraComponent,
  ComponentWithAs,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

import Slick from "@/compositions/Slick/Slick";
import InfoProduct from "./components/InfoProduct";
import RelatedProduct from "./components/RelatedProduct";

import { Image } from "@/components";
import {
  ListingProductPage,
  ProductItemsPage,
} from "@/interfaces/strapi/content_types/listing-product";
import { Payload } from "@/interfaces/strapi/common/Payload";

interface Props {
  initialData: any;
}
export default function DetailProduct({ initialData }: Props) {
  const { price, pageinfo, purchaseURL, relationSection } = get(
    initialData,
    "[0].attributes"
  );

  const _images = get(initialData, "[0].attributes.images.data");

  const render = useMemo(() => {
    if (_images.length === 0) return;

    return _images.map((el: any, idx: number) => {
      const _url = get(el, "attributes.url");

      return (
        <WrapperImage key={idx}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_url}`}
            ratio="1/1"
          />
        </WrapperImage>
      );
    });
  }, [_images]);

  return (
    <WrapperContainer>
      <WrapperGrid columns={{ base: 1, sm: 1, md: 2 }} gap={10}>
        <StyledSlick active={_images.length === 1 ? true : false}>
          <Slick props={{ infinite: _images.length > 0 ? true : false }}>
            {render}
          </Slick>
        </StyledSlick>

        <InfoProduct
          dataPrice={price}
          dataInfo={pageinfo}
          purchaseURL={purchaseURL}
        />
      </WrapperGrid>

      <RelatedProduct initialData={relationSection} />
    </WrapperContainer>
  );
}

const WrapperImage = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      padding: "0.3rem",
      "& div": {
        borderRadius: "6px",
        border: `1.5px solid ${_theme.colors.primary.light}`,
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      },
    };
  },
});

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      marginTop: "10rem",
      [theme.breakpoints.smDown]: {
        marginTop: "6.8rem",
      },
    };
  },
});

const WrapperGrid = chakra(SimpleGrid, {
  baseStyle: {
    marginBottom: "5rem",
  },
});

interface StyledHeading extends BoxProps {
  active: boolean;
}

const StyledSlick: ChakraComponent<
  ComponentWithAs<"div", StyledHeading>,
  {}
> = chakra(Box, {
  shouldForwardProp: (props) => !["active"].includes(props),
  baseStyle(props) {
    const _active = get(props, "active");

    return {
      "& .slick-cloned": {
        display: _active ? "none !important" : "block",
      },
    };
  },
});
