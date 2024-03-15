import { IoCloseOutline } from "react-icons/io5";
import { Box, ExtendTheme, Flex, Icon, chakra } from "@chakra-ui/react";

import Search from "./Search";
import Navigation from "./Navigation";

interface Props {
  active: boolean;

  handleClose: () => void;
}

export default function ContentHambuger({ active, handleClose }: Props) {
  return (
    <Wrapper visibility={active ? "visible" : "hidden"}>
      <WrapperIcon onClick={handleClose}>
        <Icon width={12} height={12} color="primary.main" as={IoCloseOutline} />
      </WrapperIcon>

      <WrapperNavigation>
        <Navigation handleClose={handleClose} />
      </WrapperNavigation>
      <WrapperSearch>
        <Search />
      </WrapperSearch>
    </Wrapper>
  );
}

const Wrapper = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 99,
      width: "100vw",
      height: "100vh",
      bg: "white",
    };
  },
});

const WrapperIcon = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      position: "absolute",
      right: 23,
      top: 23,
    };
  },
});

const WrapperNavigation = chakra(Flex, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      height: "100%",
      padding: "50px 5%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "5rem",
    };
  },
});

const WrapperSearch = chakra(Flex, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "96px",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      padding: "0 1.5rem",
      //   borderTop: "1px solid rgba(0, 0, 0, 0.08)",
    };
  },
});
