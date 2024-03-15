"use client";

import { ReactSVG } from "react-svg";
import { Skeleton } from "@chakra-ui/react";

export interface SVGProps
  extends React.ComponentPropsWithoutRef<typeof ReactSVG> {}

export default function SVG(props: SVGProps) {
  return (
    <ReactSVG
      className="svg"
      loading={() => {
        return (
          <Skeleton width={props.width ?? 30} height={props.height ?? 30} />
        );
      }}
      {...props}
    />
  );
}
