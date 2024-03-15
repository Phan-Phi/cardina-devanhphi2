import { PageInfomation } from "@/interfaces/strapi/components/PageInfomation";
import { Metadata } from "next";

const getMetadata = (data: any): Metadata => {
  const { title, description, seoImage, dataFavicon, titleSEO } = data;

  const bgImage = `${process.env.NEXT_PUBLIC_BACKEND_API}${seoImage?.data?.attributes?.url}`;
  const fvImage = `${process.env.NEXT_PUBLIC_BACKEND_API}${dataFavicon?.data?.attributes?.url}`;
  const bgWidth = seoImage?.data?.attributes?.width;
  const bgHeight = seoImage?.data?.attributes?.height;

  return {
    title: titleSEO || "Cardina",
    description: description || "",
    icons: {
      icon: fvImage,
      shortcut: fvImage,
      apple: fvImage,
    },
    openGraph: {
      title,
      description,

      images: [
        {
          url: bgImage || bgImage || "",
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
  };
};

export default getMetadata;
