import { Box, BoxProps, chakra } from "@chakra-ui/react";
import DOMPurify, { Config } from "isomorphic-dompurify";

interface RenderTextProps extends BoxProps {
  data: string;
  DOMPurifyConfig?: Config;
}

export default function RenderText(props: RenderTextProps) {
  const { data, DOMPurifyConfig, ...restProps } = props;
  // console.log("🚀 ~ RenderText ~ data:", data);
  const _data = data.replace(/\n/g, "<br>");

  return (
    <StyledHTML
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(_data, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
          ...DOMPurifyConfig,
        }) as string,
      }}
    />
  );
}

const StyledHTML = chakra(Box, {
  baseStyle: {
    textAlign: "justify",
    wordWrap: "break-word",
    display: "flex",
    flexDirection: "column",
    ["& *"]: {
      lineHeight: 1.6,
    },
    // ["& ol"]: {
    //   ...theme.typography.body1,
    //   paddingLeft: 16,
    // },
    // ["& ul"]: {
    //   ...theme.typography.body1,
    //   paddingLeft: 16,
    // },
    // ["& li"]: {
    //   ...theme.typography.body1,
    // },
    // ["& p"]: {
    //   ...theme.typography.body1,
    //   color: theme.palette.text.primary,
    // },
    ["& h2"]: {
      // ...theme.typography.body1,
      // color: theme.palette.primary.main,
      // margin: 0,
    },
    // ["& a"]: {
    //   ...theme.typography.body1,
    //   color: theme.palette.primary.main,
    //   ["&:hover"]: {
    //     color: theme.palette.common.black,
    //     transition: "color ease 0.4s",
    //   },
    // },
    // ["& span"]: {
    //   ...theme.typography.body1,
    // },
    // ["& div"]: {
    //   ...theme.typography.body1,
    // },
    ["& .left"]: {
      alignSelf: "flex-start",
    },
    ["& .right"]: {
      alignSelf: "flex-end",
    },
    ["& .text-center"]: {
      alignSelf: "center",
    },

    ["& .full-width"]: {
      width: "100%",
    },
    ["& img"]: {
      maxWidth: "100%",
      objectFit: "contain",
      height: "auto",

      //   [theme.breakpoints.down("sm")]: {
      //     width: "100%",
      //     height: "auto",
      //   },
    },
  },
});

// const StyledHTML = styled(Box)(({ theme }) => {
//   return {
//     textAlign: "justify",
//     wordWrap: "break-word",
//     display: "flex",
//     flexDirection: "column",
//     ["& *"]: {
//       lineHeight: 1.6,
//     },
//     ["& ol"]: {
//       ...theme.typography.body1,
//       paddingLeft: 16,
//     },
//     ["& ul"]: {
//       ...theme.typography.body1,
//       paddingLeft: 16,
//     },
//     ["& li"]: {
//       ...theme.typography.body1,
//     },
//     ["& p"]: {
//       ...theme.typography.body1,
//       color: theme.palette.text.primary,
//     },
//     ["& h2"]: {
//       // ...theme.typography.body1,
//       // color: theme.palette.primary.main,
//       // margin: 0,
//     },
//     ["& a"]: {
//       ...theme.typography.body1,
//       color: theme.palette.primary.main,
//       ["&:hover"]: {
//         color: theme.palette.common.black,
//         transition: "color ease 0.4s",
//       },
//     },
//     ["& span"]: {
//       ...theme.typography.body1,
//     },
//     ["& div"]: {
//       ...theme.typography.body1,
//     },
//     ["& .left"]: {
//       alignSelf: "flex-start",
//     },
//     ["& .right"]: {
//       alignSelf: "flex-end",
//     },
//     ["& .text-center"]: {
//       alignSelf: "center",
//     },

//     ["& .full-width"]: {
//       width: "100%",
//     },
//     ["& img"]: {
//       maxWidth: "100%",
//       objectFit: "contain",
//       height: "auto",

//       [theme.breakpoints.down("sm")]: {
//         width: "100%",
//         height: "auto",
//       },
//     },
//   };
// });
