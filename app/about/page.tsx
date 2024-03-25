import About from "@/containers/About/About";
import { Payload } from "@/interfaces/strapi/common/Payload";
import { AboutPage } from "@/interfaces/strapi/content_types/about-page";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";
import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data }: Payload<AboutPage> = await fetchData("ABOUT");
  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  const dataFavicon = dataSetting.attributes.favicon;

  const titleSEO = {
    titleSEO: "About Cardina",
  };

  return getMetadata({ dataFavicon, ...data.attributes.seo, ...titleSEO });
}

const AboutPage = async () => {
  const { data }: Payload<AboutPage> = await fetchData("ABOUT");
  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  return <About initialData={data} initialDataSetting={dataSetting} />;
};

export default AboutPage;
