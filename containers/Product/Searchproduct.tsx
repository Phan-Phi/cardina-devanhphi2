"use client";

import {
  Box,
  Button,
  Container,
  ExtendTheme,
  Heading,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";

import { ROUTES } from "@/routes";
import { useFetch } from "@/hooks";
import { PAGE_SIZE } from "@/contants";
import { HeaderTitle } from "@/components";
import { useCallback, useEffect, useMemo, useState } from "react";

import buildQueryString from "@/libs/buildQueryString";
import CardProduct from "@/compositions/Card/CardProduct";

interface Props {
  initialData: any;
  dataProductItems: any;
  metaDataProductItems: any;
}

export default function Searchproduct({
  initialData,
  dataProductItems,
  metaDataProductItems,
}: Props) {
  const { title, description } = initialData.attributes.pageinfo;
  const subTitle = initialData.attributes.subTitle;

  const [dataItems, setDataItems] = useState<any>([...dataProductItems]);

  const [countPage, setCountPage] = useState<number>(2);

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

  return (
    <WrapperContainer>
      <HeaderTitle
        title={title}
        isActive={true}
        subTitle={subTitle}
        content={description}
      />

      <WrapperGrid columns={{ base: 2, sm: 2, md: 5 }} gap={3.5}>
        {render}
      </WrapperGrid>
      {dataItems.length === 0 && <NoProduct />}

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

      {/* {dataProductItems.length > 0 && <Button variant="solid">See More</Button>} */}
    </WrapperContainer>
  );
}

const NoProduct = () => {
  return (
    <Box>
      <Heading variant="p3">Products not found</Heading>
    </Box>
  );
};

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      marginTop: "10rem",
      textAlign: "center",
      [theme.breakpoints.smDown]: {
        padding: "0 2.5rem",
      },

      [theme.breakpoints.mdDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperGrid = chakra(SimpleGrid, {
  baseStyle: {
    marginBottom: "2.5rem",
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
