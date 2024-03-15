import { get } from "lodash";
import { Box, ExtendTheme, chakra } from "@chakra-ui/react";

import Certifications from "@/compositions/Certifications/Certifications";

interface Props {
  initialData: any;
  initialImage: any;
}

export default function HomeCertifications({
  initialData,
  initialImage,
}: Props) {
  return (
    <Wrapper>
      <Certifications
        initialData={initialData}
        initialImage={get(initialImage, "attributes.certificationImages")}
      />
    </Wrapper>
  );
}

const Wrapper = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      padding: "5rem 0",
      marginBottom: "5rem",
      background: "#C8D9E9",
      [theme.breakpoints.smDown]: {
        marginBottom: "3.5rem",
        padding: "2.5rem 0 2.5rem 0",

        "& .chakra-container": {
          marginTop: 0,
        },
      },
    };
  },
});
