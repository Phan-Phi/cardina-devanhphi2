"use client";

import { get } from "lodash";
import { Box, Container, ExtendTheme, chakra } from "@chakra-ui/react";
import HeaderTitle from "@/components/HeaderTitle";
import RenderBody from "@/compositions/RenderHTML/RenderBody";
import Certifications from "@/compositions/Certifications/Certifications";

import { AboutPage } from "@/interfaces/strapi/content_types/about-page";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";

interface Props {
  initialData: AboutPage;
  initialDataSetting: GeneralSettingPage;
}

export default function About({ initialData, initialDataSetting }: Props) {
  // console.log("🚀 ~ About ~ initialData:", initialData);
  const { body, certificationSection } = initialData.attributes;
  const { certificationImages } = initialDataSetting.attributes;

  if (initialData == undefined) return;

  const { metaTitle, metaDescription } = get(initialData, "attributes.seo");

  return (
    <WrapperContainer>
      <HeaderTitle title={metaTitle} content={metaDescription} />

      <WrapperContent>
        <RenderBody contents={body} />
      </WrapperContent>

      <WrapperCertifications>
        <Certifications
          initialData={certificationSection}
          initialImage={certificationImages}
        />
      </WrapperCertifications>
    </WrapperContainer>
  );
}

const WrapperContainer = chakra(Container, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      marginTop: "10rem",

      [theme.breakpoints.smDown]: {
        marginTop: "6.8rem",
        padding: "0 2.5rem",
      },
    };
  },
});

const WrapperCertifications = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      marginTop: "5rem",
      [theme.breakpoints.smDown]: {
        marginTop: "2rem",
        marginBottom: "1rem",
      },
    };
  },
});

const WrapperContent = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      "& h2": { fontSize: "50px" },
    };
  },
});
