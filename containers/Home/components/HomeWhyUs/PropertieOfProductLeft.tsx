import SVG from "@/components/SVG";
import {
  Box,
  BoxProps,
  ChakraComponent,
  ComponentWithAs,
  Heading,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";

interface StyledBox extends BoxProps {
  isPositionY: string;
}

interface Props {
  title: string;
  content: string;
  option: {
    positionX: string;
    positionY: string;
  };
}

export default function PropertieOfProductLeft({
  title,
  content,
  option,
}: Props) {
  return (
    <WrapperSVG isPositionY={option.positionY}>
      <Box className="wrapper_svg">
        <SVG src="/svg/line.svg" />
      </Box>

      <WrapperContentPosition isPositionY={option.positionY}>
        <WrapperTitle direction="row">
          <Heading variant="p7" fontWeight={400}>
            {title}
          </Heading>
          <WrapperItem2 />
        </WrapperTitle>

        <Heading variant="p6">{content}</Heading>
      </WrapperContentPosition>
    </WrapperSVG>
  );
}

const WrapperContentPosition: ChakraComponent<
  ComponentWithAs<"div", StyledBox>,
  {}
> = chakra(Box, {
  shouldForwardProp: (props) => !["isPositionY"].includes(props),
  baseStyle(props) {
    const _isPositionY = get(props, "isPositionY");

    return {
      position: "absolute",
      ...(_isPositionY === "top" ? { top: "-8px" } : { bottom: "-54px" }),

      textAlign: "end",
      left: "-340%",
      width: "275px",
    };
  },
});

const WrapperSVG: ChakraComponent<
  ComponentWithAs<"div", StyledBox>,
  {}
> = chakra(Box, {
  shouldForwardProp: (props) => !["isPositionY"].includes(props),
  baseStyle(props) {
    const _isPositionY = get(props, "isPositionY");

    return {
      position: "absolute",
      textAlign: "end",
      left: "-25%",
      ...(_isPositionY === "top" ? { top: "0" } : { bottom: "28px" }),

      "& .wrapper_svg": {
        transform: _isPositionY === "top" ? "scaleY(1)" : "scaleY(-1)",
      },
    };
  },
});

const WrapperTitle = chakra(Stack, {
  baseStyle: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "1rem",
  },
});

const WrapperItem2 = chakra(Box, {
  baseStyle: {
    width: "16px",
    height: "16px",
    background: "primary.main",
    borderRadius: "100%",
  },
});
