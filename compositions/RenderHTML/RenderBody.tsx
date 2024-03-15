"use client";

import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import RenderMedia from "./RenderMedia";
import RenderText from "./RenderText";

interface Props {
  contents: any;
}

export default function RenderBody({ contents }: Props) {
  const render = useMemo(() => {
    return contents.map((el: any, idx: number) => {
      const type = el.__component;

      if (type === "media.images-component") {
        return <RenderMedia data={el} key={idx} />;
      }

      if (type === "text.markdown-block") {
        return <RenderText data={el.content} key={idx} />;
      }

      return <div key={idx}></div>;
    });
  }, [contents]);
  return <Box>{render}</Box>;
}
