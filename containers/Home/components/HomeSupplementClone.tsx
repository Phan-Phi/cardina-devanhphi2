import {
  Box,
  Container,
  ExtendTheme,
  Heading,
  SimpleGrid,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { useMemo } from "react";

import HeaderTitle from "@/components/HeaderTitle";
import { get } from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7];

interface Props {
  initialData: any;
}

export default function HomeSupplement({ initialData }: Props) {
  const {
    title,
    subTitle,
    shortDescription,
    ingredients,
    chemicalDescription,
    ingredientUnit,
  } = initialData;

  const render = useMemo(() => {
    return ingredients.map((el: any, idx: number) => {
      return (
        <Stack
          paddingTop={4}
          key={idx}
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Heading variant="p7">{el.title}</Heading>
          <Heading variant="p7">{el.value}</Heading>
        </Stack>
      );
    });
  }, [ingredients]);

  return (
    <WrapperContainer>
      <HeaderTitle
        title={title}
        isActive={true}
        subTitle={subTitle}
        content={shortDescription}
      />

      <SimpleGrid columns={{ md: 2 }}>
        <Box>
          <WrapperTitle direction="row" justifyContent="space-between">
            <Heading variant="p2">INGREDIENTS</Heading>
            <Heading variant="p5">({ingredientUnit})</Heading>
          </WrapperTitle>
          <Box>{render}</Box>
        </Box>
      </SimpleGrid>
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      marginBottom: "5rem",
      [theme.breakpoints.smDown]: {
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperTitle = chakra(Stack, {
  baseStyle: {
    borderBottom: "1px solid black",
  },
});
