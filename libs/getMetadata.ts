import { Metadata } from "next";

const getMetadata = (data: any): Metadata => {
  const {
    metaTitle,
    metaDescription,
    metaImage,
    seoImage,
    dataFavicon,
    titleSEO,
    metaSocial,
    keywords,
    canonicalURL,
  } = data;
  console.log("🚀 ~ getMetadata ~ metaImage:", metaImage);

  const bgImage = `${process.env.NEXT_PUBLIC_BACKEND_API}${metaImage.data?.attributes?.url}`;
  const fvImage = `${process.env.NEXT_PUBLIC_BACKEND_API}${dataFavicon?.data?.attributes?.url}`;
  console.log("🚀 ~ getMetadata ~ bgImage:", bgImage);
  const twitterData =
    metaSocial.length === 0
      ? undefined
      : metaSocial.filter((el: any) => el.socialNetwork === "Twitter");

  const keywordsData = keywords ? keywords.split(", ") : [];

  // const bgWidth = seoImage?.data?.attributes?.width;
  // const bgHeight = seoImage?.data?.attributes?.height;
  return {
    title: titleSEO || metaTitle || "Cardina1111",
    description: metaDescription || "",
    icons: {
      icon: fvImage,
      shortcut: fvImage,
      apple: fvImage,
    },

    // ...(twitterData && {
    //   twitter: {
    //     title: twitterData[0].title,
    //     description: twitterData[0].description,

    //     images: [
    //       {
    //         url: `${process.env.NEXT_PUBLIC_BACKEND_API}${twitterData[0].image.data.attributes.url}`,
    //         alt: twitterData[0].title,
    //         type: "image/jpeg",
    //       },
    //     ],
    //   },
    // }),

    openGraph: {
      title: metaTitle || "",
      description: metaDescription || "",
      type: "website",
      images: [
        {
          url: bgImage || "",
          alt: metaTitle,
          type: "image/jpeg",
        },
      ],
    },

   

    ...(keywordsData && {
      keywords: keywordsData,
    }),

    ...(canonicalURL && {
      alternates: {
        canonical: canonicalURL,
      },
    }),
  };
};

export default getMetadata;
