import {
  Box,
  BoxProps,
  Button,
  ChakraComponent,
  ComponentWithAs,
  Heading,
  HeadingProps,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { Fragment } from "react";

interface StyledHeading extends HeadingProps {
  isColor: boolean;
}

interface StyledBox extends BoxProps {
  isColor: boolean;
}

interface Props {
  isActive?: boolean;
  disableColor?: boolean;

  title: string;
  subTitle?: string;
  content?: string;
}

export default function HeaderTitle({
  isActive = false,
  disableColor = false,
  title,
  subTitle,
  content = "",
}: Props) {
  return (
    <Wrapper>
      <StackChakra
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Title variant="h5" isColor={disableColor}>
          {title}
        </Title>

        {isActive && (
          <Fragment>
            <Line isColor={disableColor} />
            <SubTitle variant="p2" isColor={disableColor}>
              {subTitle}
            </SubTitle>
          </Fragment>
        )}
      </StackChakra>

      {content !== "" && <Content variant="p4">{content}</Content>}
    </Wrapper>
  );
}

const Wrapper = chakra(Box, {
  baseStyle: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
});

const StackChakra = chakra(Stack, {});

const Content = chakra(Heading, {
  baseStyle: {
    marginTop: "0.5rem",
    color: "neutral.700",
  },

  md: {},
});

const Line: ChakraComponent<ComponentWithAs<"p", StyledBox>, {}> = chakra(Box, {
  shouldForwardProp: (props) => !["isColor"].includes(props),
  baseStyle(props) {
    const _isColor = get(props, "isColor");

    return {
      width: "1.5px",
      height: "2.5rem",
      background: _isColor ? "text.dark" : "primary.main",
    };
  },
});

const Title: ChakraComponent<ComponentWithAs<"p", StyledHeading>, {}> = chakra(
  Heading,
  {
    shouldForwardProp: (props) => !["isColor"].includes(props),
    baseStyle(props) {
      const _isColor = get(props, "isColor");
      const theme = props.theme;

      return {
        textTransform: "uppercase",
        fontWeight: 700,
        color: _isColor ? "text.dark" : "primary.main",

        [theme.breakpoints.smDown]: {
          fontSize: "24px",
          lineHeight: "28.8px",
        },
      };
    },
  }
);
const SubTitle: ChakraComponent<
  ComponentWithAs<"p", StyledHeading>,
  {}
> = chakra(Heading, {
  shouldForwardProp: (props) => !["isColor"].includes(props),
  baseStyle(props) {
    const _isColor = get(props, "isColor");
    const theme = props.theme;
    return {
      textTransform: "uppercase",
      color: _isColor ? "text.dark" : "primary.main",

      [theme.breakpoints.smDown]: {
        fontSize: "18px",
        lineHeight: "21.6px",
      },
    };
  },
});
