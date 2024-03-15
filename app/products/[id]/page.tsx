import DetailProduct from "@/containers/Product/DetailProduct";
import { Payload } from "@/interfaces/strapi/common/Payload";
import { GeneralSettingPage } from "@/interfaces/strapi/content_types/general-setting";
import { ListingProductPage } from "@/interfaces/strapi/content_types/listing-product";
import fetchData from "@/libs/fetchData";
import getMetadata from "@/libs/getMetadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = params;

  const { data }: Payload<ListingProductPage[]> = await fetchData("PRODUCTS", {
    populate: "deep,4",
    filters: {
      pageinfo: {
        slug: {
          $eq: id,
        },
      },
    },
  });

  const { data: dataSetting }: Payload<GeneralSettingPage> =
    await fetchData("GENERAL_SETTING");

  const dataFavicon = dataSetting.attributes.favicon;
  return getMetadata({ dataFavicon, ...data[0].attributes.pageinfo });
}

const DetailProductPage = async ({ params }: any) => {
  const { id } = params;

  const { data }: Payload<ListingProductPage> = await fetchData("PRODUCTS", {
    populate: "deep,4",
    filters: {
      pageinfo: {
        slug: {
          $eq: id,
        },
      },
    },
  });

  return <DetailProduct initialData={data} />;
};

export default DetailProductPage;

// const { data: demo }: Payload<ListingProductPage> = await fetchData(
//   "PRODUCTS",
//   {
//     // populate: "deep,4",
//     filters: {
//       pageinfo: {
//         title: {
//           $nei: "STRESS RELIEVER",
//         },
//       },
//     },
//   }
// );
