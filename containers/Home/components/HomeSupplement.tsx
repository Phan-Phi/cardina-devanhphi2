import {
  Box,
  ChakraComponent,
  ComponentWithAs,
  Container,
  ExtendTheme,
  Fade,
  Heading,
  HeadingProps,
  SimpleGrid,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { useMemo, useState } from "react";

import HeaderTitle from "@/components/HeaderTitle";
import TabPanelContent from "./TabPanelContent";
import { Image } from "@/components";

interface StyledHeading extends HeadingProps {
  active: boolean;
}

interface Props {
  initialData: any;
}

export default function HomeSupplement({ initialData }: Props) {
  const { title, subTitle, shortDescription, ingredients, ingredientUnit } =
    initialData;

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [contentItem, setContentItem] = useState<any>(ingredients[0]);

  const render = useMemo(() => {
    return ingredients.map((el: any, idx: number) => {
      return (
        <WrapperContent
          key={idx}
          onClick={() => {
            setIsOpen(false);

            setTimeout(() => {
              setIsOpen(true);
              setContentItem(el);
            }, 700);
          }}
        >
          <Text active={contentItem.id === el.id} variant="p7">
            {el.title}
          </Text>
          <Text active={contentItem.id === el.id} variant="p7">
            {el.value}
          </Text>
        </WrapperContent>
      );
    });
  }, [ingredients, contentItem]);

  return (
    <WrapperContainer>
      <HeaderTitle
        title={title}
        isActive={true}
        subTitle={subTitle}
        content={shortDescription}
      />

      <WrapperSimpleGrid>
        <Box width={{ base: "100%", sm: "50%" }}>
          <WrapperTitle direction="row" justifyContent="space-between">
            <Heading variant="p2">INGREDIENTS</Heading>
            <Heading variant="p5">({ingredientUnit})</Heading>
          </WrapperTitle>
          <Box>{render}</Box>
        </Box>

        <Box width={{ base: "100%", sm: "50%" }}>
          <Fade in={isOpen}>
            <WrapperInfo>
              {/* SUPPLEMENT */}
              <Wrapper3D width={120} height={120}></Wrapper3D>

              <Heading variant="p5">{contentItem.chemicalDescription}</Heading>
            </WrapperInfo>
          </Fade>
        </Box>
      </WrapperSimpleGrid>
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      marginBottom: "5rem",
      [theme.breakpoints.mdDown]: {
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

const WrapperContent = chakra(Stack, {
  baseStyle: {
    cursor: "pointer",
    paddingTop: "1.5rem",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const WrapperInfo = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      border: `1px solid ${theme.colors.primary.light}`,
      borderRadius: "6px",
      padding: "1rem",
    };
  },
});

const WrapperSimpleGrid = chakra(Stack, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      flexDirection: "row",
      alignItems: "center",
      gap: "2.5rem",

      [theme.breakpoints.smDown]: {
        flexDirection: "column-reverse",
      },
    };
  },
});

const Wrapper3D = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {};
  },
});

const Text: ChakraComponent<ComponentWithAs<"p", StyledHeading>, {}> = chakra(
  Heading,
  {
    shouldForwardProp: (props) => !["active"].includes(props),
    baseStyle(props) {
      const _active = get(props, "active");

      return {
        color: _active ? "primary.main" : "black",
        fontWeight: _active ? 700 : 300,
      };
    },
  }
);
