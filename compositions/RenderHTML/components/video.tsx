// import { Media } from "@/interfaces/strapi";
import { Box } from "@chakra-ui/react";

const Video = ({ data }: { data: any }) => {
  const {
    attributes: { url },
  } = data;

  return (
    <Box
      width={{
        base: "100%",
        md: "50%",
      }}
    >
      <video
        controls
        src={`${process.env.NEXT_PUBLIC_BACKEND_API!}${url}`}
        width="100%"
      />
    </Box>
  );
};

export default Video;
