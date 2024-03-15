import { split } from "lodash";
import { forwardRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type OmitKey = "alt" | "objectFit" | "src";

interface ExtendNextImageProps extends Omit<NextImageProps, OmitKey> {
  alt?: string;
}

interface ImageProps {
  ratio?: string;
  boxProps?: BoxProps;
  imageProps?: ExtendNextImageProps;
  src: NextImageProps["src"];
}

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const Image = forwardRef<HTMLDivElement | undefined, ImageProps>(
  function ImageRatio(props, ref) {
    const { ratio, boxProps, imageProps = {}, src } = props;

    const { fill = true, width, height, ...restProps } = imageProps;

    const splitRatio = split(ratio, "/");

    return (
      <Box
        {...boxProps}
        ref={ref}
        position="relative"
        paddingBottom={
          ratio && `calc(${splitRatio[1]} / ${splitRatio[0]} * 100%)`
        }
      >
        <NextImage
          src={src}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : width}
          blurDataURL={defaultBlurDataURL}
          className="object-fit-contain"
          alt=""
          sizes="50vw"
          {...restProps}
        />
      </Box>
    );
  }
);

export default Image;
