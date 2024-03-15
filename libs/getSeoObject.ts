import { get } from "lodash";

const getSeoObject = (props: any) => {
  // console.log("🚀 ~ getSeoObject ~ props:", props);

  const title = get(props, "title");
  const description = get(props, "description");
  const image = get(props, "seoImage.data.attributes.url");

  return {
    title,
    description,
    image,
  };
};

export { getSeoObject };
