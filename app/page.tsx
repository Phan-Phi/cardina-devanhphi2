import Home from "@/containers/Home/Home";
import { Payload } from "@/interfaces/strapi/common/Payload";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";
import { HomePage } from "@/interfaces/strapi/content_types/home-page";
import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data }: Payload<HomePage> = await fetchData("HOME");
  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  const dataFavicon = dataSetting.attributes.favicon;

  const titleSEO = {
    titleSEO: "Cardina",
  };

  return getMetadata({ dataFavicon, ...data.attributes.seo, ...titleSEO });
}

const HomePage = async () => {
  const { data }: Payload<HomePage> = await fetchData("HOME");
  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  return <Home initialData={data} initialDataSetting={dataSetting} />;
};

export default HomePage;
