import { Box, Container, ExtendTheme, chakra } from "@chakra-ui/react";

import { Image } from "@/components";

import HeaderTitle from "@/components/HeaderTitle";
import PropertieOfProductLeft from "./PropertieOfProductLeft";
import PropertieOfProductRight from "./PropertieOfProductRight";

interface Props {
  initialData: any;
}

export default function HomeWhyUs({ initialData }: Props) {
  if (initialData == undefined) return;
  const { title, subTitle, shortDescription } = initialData;

  return (
    <WrapperContainer>
      <HeaderTitle
        title={title}
        isActive={true}
        subTitle={subTitle}
        content={shortDescription}
      />
      {/* WHY US */}
      <Wrapper3D></Wrapper3D>
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

const WrapperImage = chakra(Box, {
  baseStyle: {
    position: "relative",
    margin: "0 auto",
    width: "228px",
    height: "295px",
  },
});

const Wrapper3D = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;
    return {
      height: "400px",
      padding: "3rem 0",
      borderRadius: "6px",
      border: `1.5px solid ${_theme.colors.primary.light}`,
    };
  },
});
