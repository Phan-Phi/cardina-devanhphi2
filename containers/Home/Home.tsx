"use client";

import { get } from "lodash";
import { Box } from "@chakra-ui/react";

import HomeCertifications from "./components/HomeCertifications";
import HomeProduct from "./components/HomeProduct";
import HomeSupplement from "./components/HomeSupplement";
import HomeWhyUs from "./components/HomeWhyUs/HomeWhyUs";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomeCount from "./components/HomeCount/HomeCount";
import BoxAos from "@/compositions/AOS/BoxAos";
import Demo from "@/compositions/Demo";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  initialData: any;
  initialDataSetting: any;
}

const Home = ({ initialData, initialDataSetting }: Props) => {
  const [state, setState] = useState<boolean>(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("WrapperBodyContent");
      if (element) {
        element.style.height = "1px";
        setState(true);
      }
    }, 1000);
  }, []);

  if (initialData == undefined) return;

  return (
    <Box>
      <Box sx={{ height: "100vh" }} id="WrapperBodyContent"></Box>

      <BoxAos active={true}>
        <HomeBanner
          initialData={get(initialData, "attributes.bannerSection")}
        />
      </BoxAos>

      <BoxAos active={true}>
        <HomeWhyUs initialData={get(initialData, "attributes.whyUsSection")} />
      </BoxAos>

      <BoxAos>
        <HomeCount initialData={get(initialData, "attributes.whyUsSection")} />
      </BoxAos>

      <BoxAos>
        <HomeSupplement
          initialData={get(initialData, "attributes.supplementSection")}
        />
      </BoxAos>

      <BoxAos>
        <HomeCertifications
          initialData={get(initialData, "attributes.certificationSection")}
          initialImage={initialDataSetting}
        />
      </BoxAos>

      <BoxAos>
        <HomeProduct
          initialData={get(initialData, "attributes.productSection")}
        />
      </BoxAos>
    </Box>
  );
};

export default Home;
