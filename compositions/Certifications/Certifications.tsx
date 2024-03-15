"use client";

import { get } from "lodash";
import { useMemo } from "react";
import {
  Box,
  Container,
  ExtendTheme,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";

import { Image } from "@/components";
import HeaderTitle from "@/components/HeaderTitle";
import Slick from "../Slick/Slick";
import SlickAutoPlay from "../Slick/SlickAutoPlay";

interface Props {
  initialData: any;
  initialImage: any;
}

export default function Certifications({ initialData, initialImage }: Props) {
  const render = useMemo(() => {
    if (initialImage == undefined) return;

    return initialImage.map((el: any, idx: number) => {
      const _url = get(el, "image.data.attributes.url");
      const widthIMG = get(el, "image.data.attributes.width");
      const heightIMG = get(el, "image.data.attributes.height");

      return (
        <WrapperImage
          key={idx}
          position="relative"
          // width={widthIMG}
          // height={heightIMG}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_url}`}
            // src=""
            ratio={`${135}/${50}`}
            imageProps={{ alt: "sss" }}
          />
        </WrapperImage>
      );
    });
  }, [initialImage]);

  if (initialData == undefined) return;
  const { title, subTitle } = initialData;

  return (
    <WrapperContainer>
      <HeaderTitle title={title} disableColor={true} content={subTitle} />

      {/* <SimpleGrid gap="5rem" columns={{ sm: 2, md: 5 }}>
        {render}
      </SimpleGrid> */}

      <WrapperSlick className="WrapperSlick">
        <SlickAutoPlay variant="multiple" props={{ dots: false }}>
          {render}
        </SlickAutoPlay>
      </WrapperSlick>
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      padding: "0 6rem",
      // marginTop: "5rem",

      [theme.breakpoints.smDown]: {
        padding: 0,
        marginTop: "2.5rem",
      },
    };
  },
});

const WrapperSlick = chakra(Box, {
  baseStyle: {
    height: "70px",
    "& div": {
      height: "100%",
    },

    "& .slick-track": {
      display: "flex",
      gap: "2rem",
    },
  },
});

const WrapperImage = chakra(Box, {
  baseStyle: {
    // padding: "0 3rem",

    "& img": {
      objectFit: "contain",
    },
  },
});
