import Contact from "@/containers/Contact/Contact";
import { Payload } from "@/interfaces/strapi/common/Payload";
import { AboutPage } from "@/interfaces/strapi/content_types/about-page";
import { ContactPage } from "@/interfaces/strapi/content_types/contact-page";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";
import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data }: Payload<ContactPage> = await fetchData("CONTACT");
  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  const dataFavicon = dataSetting.attributes.favicon;

  const titleSEO = {
    titleSEO: "Contact Us",
  };

  return getMetadata({ dataFavicon, ...data.attributes.seo, ...titleSEO });
}

const ContactPage = async () => {
  const { data }: Payload<ContactPage> = await fetchData("CONTACT");

  return <Contact initialData={data} />;
};

export default ContactPage;
