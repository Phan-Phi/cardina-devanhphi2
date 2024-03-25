"use client";

import { useMemo } from "react";
import rehypeRaw from "rehype-raw";
import { Box, chakra } from "@chakra-ui/react";
import remarkBreaks from "remark-breaks";

import remarkGfm from "remark-gfm";
import RenderText from "./RenderText";
import Markdown from "react-markdown";
import Video from "./components/video";
import RenderMedia from "./RenderMedia";
import Oembed from "./Oembed";

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
        const _content = el.content.replace(/\n/gi, "&nbsp; \n");
        return (
          <WrapperContent className="text-markdown-block" key={idx}>
            <Markdown
              remarkPlugins={[remarkBreaks, remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {_content}
            </Markdown>
          </WrapperContent>
        );

        return <RenderText data={el.content} key={idx} />;
      } else if (type === "media.video-component") {
        const { video } = el;
        return (
          <WrapperVideo key={idx} width="100% !important">
            <Video data={video.data} />
          </WrapperVideo>
        );
      } else if (type === "text.o-embed-component") {
        const { oembed } = el;
        return;
        // return <Oembed key={idx} data={oembed} />;
      }

      return <div key={idx}></div>;
    });
  }, [contents]);
  return <Box>{render}</Box>;
}

const WrapperVideo = chakra(Box, {
  baseStyle() {
    return {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5rem",

      "& div": {
        width: "80% ",
      },
    };
  },
});

const WrapperContent = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme;

    return {
      "& h1": {
        fontSize: "72px",
        lineHeight: "86.4px",
        fontWeight: 400,
      },

      "& h2": {
        fontSize: "64px",
        lineHeight: "64px",
        fontWeight: 400,
      },

      "& h3": {
        fontSize: "52px",
        lineHeight: "52px",
        fontWeight: 400,
      },

      "& h4": {
        fontSize: "36px",
        lineHeight: "43.2px",
        fontWeight: 400,
      },

      "& h5": {
        fontSize: "30",
        lineHeight: "36px",
        fontWeight: 400,
      },

      "& h6": {
        fontSize: "24px",
        lineHeight: "28.8px",
        fontWeight: 400,
      },
    };
  },
});
