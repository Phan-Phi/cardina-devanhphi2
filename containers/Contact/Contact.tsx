"use client";

import { get } from "lodash";
import { Box, Container, Tooltip, chakra } from "@chakra-ui/react";

import { Image } from "@/components";
import { ContactPage } from "@/interfaces/strapi/content_types/contact-page";

import HeaderTitle from "@/components/HeaderTitle";
import FormContact from "./components/FormContact";
import { FaExclamationTriangle } from "react-icons/fa";

interface Props {
  initialData: ContactPage;
}

export default function Contact({ initialData }: Props) {
  console.log("🚀 ~ Contact ~ initialData:", initialData);
  if (initialData == undefined) return;

  const { title, description } = get(initialData, "attributes.pageinfo");
  const banner = get(initialData, "attributes.banner");
  const url = get(banner, "image.data.attributes.url");

  return (
    <WrapperContainer>
      <WrapperBanner className="WrapperBanner">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_API}${url}`}
          ratio="1048/525"
          imageProps={{ alt: "banner.alt" }}
        />
      </WrapperBanner>

      <HeaderTitle title={title} content={description} />

      <FormContact />
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      [theme.breakpoints.mdDown]: {
        padding: "0 2.5rem",
        marginBottom: "1rem",
      },
    };
  },
});

const WrapperBanner = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      margin: "10rem 0 2.5rem 0",

      "& img": {
        borderRadius: "6px",
      },

      [theme.breakpoints.smDown]: {
        margin: "6.8rem 0 2.5rem 0",

        // "& div": {
        //   paddingBottom: "calc(525 / 310* 100%)",
        // },

        // "& img": {
        //   borderRadius: "6px",
        //   objectFit: "cover",
        // },
      },
    };
  },
});
