import { Box } from "@chakra-ui/react";
import DOMPurify from "isomorphic-dompurify";

const Oembed = ({ data }: { data: any }) => {
  if (data == undefined) return null;

  const _data = JSON.parse(data);

  const { width, height, html } = _data?.rawData || {};

  return (
    <Box
      width={{
        base: "100%",
        md: "50%",
      }}
      aspectRatio={width / height}
      sx={{
        "& iframe": {
          width: "full",
          height: "full",
        },
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
        }),
      }}
    />
  );
};

export default Oembed;
