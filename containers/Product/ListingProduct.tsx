"use client";

import { get } from "lodash";

import {
  Box,
  Button,
  Container,
  ExtendTheme,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import HeaderTitle from "@/components/HeaderTitle";
import buildQueryString from "@/libs/buildQueryString";
import CardProduct from "@/compositions/Card/CardProduct";

import { ROUTES } from "@/routes";
import { useFetch } from "@/hooks";
import { PAGE_SIZE } from "@/contants";
import { TypePagination } from "@/interfaces/strapi/components/TypePagination";
import {
  ListingProductPage,
  RelationSection,
} from "@/interfaces/strapi/content_types/listing-product";
import { useSetting } from "@/hooks/useSetting";

interface Props {
  initialData: ListingProductPage;
  dataProductItems: [RelationSection];
  metaDataProductItems: any;
}

export default function ListingProduct({
  initialData,
  dataProductItems,
  metaDataProductItems,
}: Props) {
  const headerTitleData = get(initialData, "attributes.seo");

  const subTitle = initialData.attributes.subTitle;

  const [dataItems, setDataItems] = useState<any>([...dataProductItems]);
  const [countPage, setCountPage] = useState<number>(2);

  const setting = useSetting();

  const { data, resData, changeKey, isDone, isLoading } = useFetch("");

  useEffect(() => {
    if (data == undefined) {
      return;
    }
    setDataItems((el: any) => {
      return [...el, ...data];
    });

    setCountPage((el: any) => {
      return el + 1;
    });
  }, [data]);

  const handleSeeMore = useCallback(() => {
    changeKey(
      `${ROUTES["PRODUCTS"]}?${buildQueryString({
        populate: "deep",
        pagination: {
          page: countPage,
          pageSize: PAGE_SIZE,
        },
      })}`
    );
  }, [countPage]);

  const render = useMemo(() => {
    if (dataItems == undefined || dataItems.length === 0) return;

    return dataItems.map((el: any, idx: number) => {
      return (
        <StyledWrap key={idx}>
          <CardProduct initialDataCard={el} />
        </StyledWrap>
      );
    });
  }, [dataItems]);

  const renderHeaderTitle = useMemo(() => {
    if (headerTitleData === null) return;
    const { metaTitle, metaDescription } = headerTitleData;
    return (
      <HeaderTitle
        title={metaTitle}
        isActive={true}
        subTitle={subTitle}
        content={metaDescription}
      />
    );
  }, [headerTitleData]);

  return (
    <WrapperContainer>
      {renderHeaderTitle}

      {/* <BoxFlex>{render}</BoxFlex> */}

      <Box style={{}}></Box>

      <WrapperGrid
        transform={
          dataItems.length === 1
            ? "translateX(33.2%)"
            : dataItems.length === 2
              ? "translateX(18%)"
              : "none"
        }
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={3.5}
      >
        {render}
      </WrapperGrid>

      {dataItems.length ===
      get(metaDataProductItems, "pagination.total") ? null : (
        <Button
          disabled={
            dataItems.length === get(metaDataProductItems, "pagination.total")
              ? true
              : false
          }
          variant="solid"
          onClick={() => {
            handleSeeMore();
          }}
        >
          See More
        </Button>
      )}
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      marginTop: "10rem",
      textAlign: "center",
      overflow: "hidden",
      [theme.breakpoints.smDown]: {
        marginTop: "6.8rem",
        marginBottom: "1rem",
        padding: "0 2.5rem",
      },

      [theme.breakpoints.mdDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperGrid = chakra(SimpleGrid, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      marginBottom: "2.5rem",

      [theme.breakpoints.smDown]: {
        transform: "none !important",
      },
    };
  },
});

const BoxFlex = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;

    return {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.8rem",
    };
  },
});

const StyledWrap = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;

    return {
      // width: "18.8%",
      // [theme.breakpoint.dowmSm]: {
      // },
    };
  },
});

// changeKey(
//   "https://cardina-dev.t-solution.vn/api/products?populate=deep&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=20"
// );
