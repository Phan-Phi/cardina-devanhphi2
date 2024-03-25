"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Slider, { Settings } from "react-slick";
import { Box, BoxProps, ExtendTheme, chakra } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import NextArrow from "./NextArrow";
// import PrevArrow from "./PrevArrow";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const createSettings = (variant: string, count: number) => {
  if (variant === "simple") {
    return {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    return {
      dots: false,
      infinite: count >= 3 ? true : false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: count >= 3 ? true : false,
      draggable: count >= 3 ? true : false,
      nextArrow: <FaChevronRight color="#37AFE3" />,
      prevArrow: <FaChevronLeft color="#37AFE3" />,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            infinite: count >= 3 ? true : false,
            arrows: count >= 3 ? true : false,
            draggable: count >= 3 ? true : false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        // {
        //   breakpoint: 700,
        //   settings: {
        //     infinite: count >= 3 ? true : false,
        //     arrows: count >= 3 ? true : false,
        //     draggable: count >= 3 ? true : false,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },

        {
          breakpoint: 430,
          settings: {
            draggable: count > 1 ? true : false,
            infinite: count > 1 ? true : false,
            arrows: count > 1 ? true : false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

export default function Slick({
  children,
  props,
  variant = "simple",
  count = 5,
  refSlick,
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
  count?: number;
  refSlick?: any;
}) {
  return (
    <WrapperItem>
      <Slider {...createSettings(variant, count)} ref={refSlick} {...props}>
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
