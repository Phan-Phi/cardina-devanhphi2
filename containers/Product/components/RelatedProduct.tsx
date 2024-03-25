"use client";

import HeaderTitle from "@/components/HeaderTitle";
import CardProduct from "@/compositions/Card/CardProduct";
import Slick from "@/compositions/Slick/Slick";
import {
  Box,
  BoxProps,
  ChakraComponent,
  ComponentWithAs,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo } from "react";

interface StyledBox extends BoxProps {
  count: number;
}

interface Props {
  initialData: any;
}

export default function RelatedProduct({ initialData }: Props) {
  const { title, description, products } = initialData;

  const render = useMemo(() => {
    if (products.data.length === 0) return;

    return products.data.map((el: any, idx: number) => {
      return <CardProduct key={idx} initialDataCard={el} />;
    });
  }, [products]);

  if (products.data.length === 0) return;

  return (
    <Box>
      <HeaderTitle title={title} content={description} />

      {/* <SimpleGrid columns={{ md: 5 }} gap={3.5}>
        {render}
      </SimpleGrid> */}

      <WrapperSlick count={products.data.length}>
        <Slick
          variant="multiple"
          count={products.data.length}
          props={{ dots: false }}
        >
          {render}
        </Slick>
      </WrapperSlick>
    </Box>
  );
}

// const WrapperSlick = chakra(Box, {
//   baseStyle: {
//     // "& .slick-list": {
//     //   display: "flex",
//     //   justifyContent: "center",
//     // },
//     "& .slick-track": {
//       display: "flex",
//       margin: "0.3rem 0",
//       // width: "100% !important",
//     },
//     "& .slick-slide": {
//       padding: "0 0.5rem",
//     },

//     "& .slick-active": {
//       "& .WrapperItemCard": {
//         boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
//       },
//     },
//   },
// });

const WrapperSlick: ChakraComponent<
  ComponentWithAs<"div", StyledBox>,
  {}
> = chakra(Box, {
  shouldForwardProp: (props) => !["count"].includes(props),
  baseStyle(props) {
    const _count: any = get(props, "count");

    const theme = props.theme;

    return {
      "& .slick-slider": {
        "& .slick-prev": {
          left: 0,
        },

        "& .slick-next": {
          right: 0,
        },

        [theme.breakpoints.mdUp]: {
          padding: "0 2rem",
        },

        [theme.breakpoints.mdDown]: {
          padding: "0 1.5rem",
        },
      },

      "& .slick-list": {
        display: _count >= 3 ? "block" : "flex",
        justifyContent: "center",
      },
      "& .slick-track": {
        display: "flex",
        margin: "0.3rem 0",
        // width: "100% !important",
      },
      "& .slick-slide": {
        padding: "0 0.5rem",
      },

      "& .slick-active": {
        "& .WrapperItemCard": {
          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        },
      },
    };
  },
});
