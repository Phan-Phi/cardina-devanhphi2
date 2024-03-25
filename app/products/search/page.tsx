import { Metadata } from "next";
import Searchproduct from "@/containers/Product/Searchproduct";
import { Payload } from "@/interfaces/strapi/common/Payload";
import { ListingProductPage } from "@/interfaces/strapi/content_types/listing-product";
import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import { PAGE_SIZE } from "@/contants";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";

export async function generateMetadata(): Promise<Metadata> {
  const { data }: Payload<ListingProductPage> =
    await fetchData("PRODUCT_LISTING");

  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  const dataFavicon = dataSetting.attributes.favicon;

  const titleSEO = {
    titleSEO: "Products",
  };

  return getMetadata({ dataFavicon, ...data.attributes.seo, ...titleSEO });
}

const SearchProductPage = async ({ searchParams }: any) => {
  const { name } = searchParams;

  const { data }: Payload<ListingProductPage> =
    await fetchData("PRODUCT_LISTING");

  const {
    data: dataProductItems,
    meta: metaDataProductItems,
  }: Payload<ListingProductPage> = await fetchData("PRODUCTS", {
    populate: "deep",
    filters: {
      seo: {
        metaTitle: {
          $containsi: name,
          // $eqi: name,
        },
      },
    },
    pagination: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  });

  return (
    <Searchproduct
      initialData={data}
      metaDataProductItems={metaDataProductItems}
      dataProductItems={dataProductItems}
    />
  );
};

export default SearchProductPage;
