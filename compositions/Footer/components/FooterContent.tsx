import { get } from "lodash";
import { useMemo } from "react";
import { Box, Heading, Stack, chakra } from "@chakra-ui/react";

import { Image, Link } from "@/components";
import { NAVBAR_ROUTES } from "@/routes";
import { useSetting } from "@/hooks/useSetting";

export default function FooterContent() {
  const { logo, socialImages } = useSetting();

  const _logo = get(logo, "data.attributes.url");
  const _logoAmazon = get(socialImages, "[0].image.data.attributes.url");

  const renderRoutes = useMemo(() => {
    return NAVBAR_ROUTES.map((el, idx) => {
      return (
        <LinkChakra href={el.link} key={idx}>
          <Heading variant="p6">{el.name}</Heading>
        </LinkChakra>
      );
    });
  }, [NAVBAR_ROUTES]);

  return (
    <>
      <Wrapper direction="row" justifyContent="space-between">
        <WrapperLogo position="relative">
          <Box width="92.5px" height="19px">
            {_logo && (
              <Image
                // src="/img/logo (1).png"
                src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_logo}`}
                ratio="92.5/19"
              />
            )}
          </Box>
          <Heading variant="p6">All Rights Reserved</Heading>
        </WrapperLogo>

        <StyledStack direction="row" spacing={5}>
          {renderRoutes}
        </StyledStack>

        <Box position="relative">
          {socialImages && (
            <Link href={get(socialImages, "[0].link")} target="_blank">
              <Box width="105px" height="51px">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_API}${_logoAmazon}`}
                  ratio="105/51"
                />
              </Box>
            </Link>
          )}
        </Box>
      </Wrapper>
    </>
  );
}

const Wrapper = chakra(Stack, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",

      // [theme.breakpoints.smDown]: {
      //   display: "none !important",
      // },
    };
  },
});

const LinkChakra = chakra(Link, {
  baseStyle: {
    textDecoration: "none !important",
  },
});

const StyledStack = chakra(Stack, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      [theme.breakpoints.smDown]: {
        display: "none !important",
      },
    };
  },
});

const WrapperLogo = chakra(Stack, {
  baseStyle(props) {
    return {
      alignItems: "center",
    };
  },
});
