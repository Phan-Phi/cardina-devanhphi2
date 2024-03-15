"use client";

import { Image, Link } from "@/components";

import { useCallback, useState } from "react";
import {
  Box,
  Fade,
  Flex,
  Icon,
  chakra,
  ExtendTheme,
  Container,
} from "@chakra-ui/react";
import { get } from "lodash";
import { RxHamburgerMenu } from "react-icons/rx";

import Search from "./components/Search";
import Navigation from "./components/Navigation";
import ContentHambuger from "./components/ContentHambuger";

import { useSetting } from "@/hooks/useSetting";

interface NavigationItem {
  displayValue: string;
  path: string;
  children: NavigationItem[] | null;
}

const Header = () => {
  const { logo } = useSetting();
  const [isOpen, setOpen] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const _logo = get(logo, "data.attributes.url");

  return (
    <Wrapper>
      <ContainerContent maxW="container.xl">
        <StyledFlex>
          {logo ? (
            <Link href="/">
              <Box
                width="92.5px"
                height="19px"
                alignSelf={{
                  base: "flex-end",
                  md: "center",
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_logo}`}
                  ratio="92.5/19"
                />
              </Box>
            </Link>
          ) : (
            <Box></Box>
          )}

          <Flex
            // width="20%"
            gap={6}
            display={{
              base: "none",
              md: "flex",
            }}
            justifyContent="center"
          >
            <Navigation handleClose={onClose} />
          </Flex>

          <Box
            position="absolute"
            right="0"
            display={{
              base: "block",
              md: "none",
            }}
          >
            <Icon
              color="primary.main"
              width={6}
              height={6}
              as={RxHamburgerMenu}
              onClick={() => setOpen(true)}
            />
          </Box>

          <Flex
            width="20%"
            justifyContent="flex-end"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <Search />
          </Flex>
        </StyledFlex>

        <Fade in={isOpen}>
          <ContentHambuger active={isOpen} handleClose={onClose} />
        </Fade>
      </ContainerContent>
    </Wrapper>
  );
};

const Wrapper = chakra(Box, {
  baseStyle(props) {
    const _theme = props.theme as ExtendTheme;
    return {
      position: "fixed",
      top: 0,
      left: 0,

      zIndex: "99",
      width: "100%",
      background: "white",
      borderBottom: `1px solid ${_theme.colors.primary.light}`,
    };
  },
});

const ContainerContent = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      padding: "0 1rem",
      [theme.breakpoints.mdDown]: {
        padding: "0 1rem",
      },
    };
  },
});

const Meunuitem = chakra(Link, {
  baseStyle: {
    textDecoration: "none !important",
    color: "primary.main",
  },
});

const StyledFlex = chakra(Flex, {
  baseStyle(props) {
    // const _theme = props.theme as ExtendTheme;

    return {
      width: "100%",
      height: "4.43rem",
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
    };
  },

  md: {
    justifyContent: "space-between",
  },
});

export default Header;
