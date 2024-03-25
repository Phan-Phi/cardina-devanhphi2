import { Metadata } from "next";
import { Payload } from "@/interfaces/strapi/common/Payload";
import {
  ListingProductPage,
  ProductItemsPage,
} from "@/interfaces/strapi/content_types/listing-product";

import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import ListingProduct from "@/containers/Product/ListingProduct";
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

const ListingProductPage = async () => {
  const { data }: Payload<ListingProductPage> =
    await fetchData("PRODUCT_LISTING");

  const { data: dataProductItems, meta: metaDataProductItems }: Payload<any> =
    await fetchData("PRODUCTS", {
      populate: "deep",
      pagination: {
        page: 1,
        pageSize: PAGE_SIZE,
      },
    });

  return (
    <ListingProduct
      initialData={data}
      metaDataProductItems={metaDataProductItems}
      dataProductItems={dataProductItems}
    />
  );
};

export default ListingProductPage;
