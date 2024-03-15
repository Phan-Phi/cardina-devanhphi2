"use client";

import Slider, { Settings } from "react-slick";
import { Box, BoxProps, ExtendTheme, chakra } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import NextArrow from "./NextArrow";
// import PrevArrow from "./PrevArrow";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const createSettings = (variant: string) => {
  if (variant == "simple") {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
  } else {
    return {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 500,
      cssEase: "linear",
      arrows: false,

      //   nextArrow: <NextArrow />,
      //   prevArrow: <PrevArrow />,

      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

export default function SlickAutoPlay({
  children,
  props,
  variant = "simple",
  refSlick,
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
  refSlick?: any;
}) {
  return (
    <WrapperItem>
      <Slider {...createSettings(variant)} ref={refSlick} {...props}>
        {children}
      </Slider>
    </WrapperItem>
  );
}

const WrapperItem = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;

    return {
      "& .slick-dots": {
        "& .slick-active": {
          "& button::before": {
            color: _theme.colors.primary.main,
          },
        },

        "& li": {
          margin: "0",

          "& button::before": {
            color: _theme.colors.primary.light,
            opacity: 1,

            fontSize: "10px",
          },
        },
      },
    };
  },
});
