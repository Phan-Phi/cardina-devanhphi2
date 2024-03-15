import {
  ChakraComponent,
  ComponentWithAs,
  Heading,
  HeadingProps,
  chakra,
} from "@chakra-ui/react";
import { get } from "lodash";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

import { Link } from "@/components";
import { NAVBAR_ROUTES } from "@/routes";

interface StyledHeading extends HeadingProps {
  isColor: boolean;
}

interface Props {
  handleClose: () => void;
}

export default function Navigation({ handleClose }: Props) {
  const pathname = usePathname();

  return (
    <Fragment>
      {NAVBAR_ROUTES.map((el, idx) => {
        // const demo = el.key.split("/");

        if (el.key === "/product") {
          if (pathname.includes("product")) {
            return (
              <Meunuitem key={idx} href={el.link}>
                <Title isColor={true} variant="p4" onClick={handleClose}>
                  {el.name}
                </Title>
              </Meunuitem>
            );
          }
        }

        return (
          <Meunuitem key={idx} href={el.link}>
            <Title
              isColor={el.key === pathname}
              variant="p4"
              onClick={handleClose}
            >
              {el.name}
            </Title>
          </Meunuitem>
        );
      })}
    </Fragment>
  );
}

const Meunuitem = chakra(Link, {
  baseStyle: {
    textDecoration: "none !important",
    color: "primary.main",
  },
});

const Title: ChakraComponent<ComponentWithAs<"p", StyledHeading>, {}> = chakra(
  Heading,
  {
    shouldForwardProp: (props) => !["isColor"].includes(props),
    baseStyle(props) {
      const _isColor = get(props, "isColor");

      return {
        color: _isColor ? "primary.dark" : "primary.main",
        fontWeight: _isColor ? 600 : 400,
      };
    },
  }
);

const Text = chakra(Heading, {
  baseStyle: {
    textDecoration: "none !important",
    color: "primary.main",

    fontWeight: 700,
  },
});
