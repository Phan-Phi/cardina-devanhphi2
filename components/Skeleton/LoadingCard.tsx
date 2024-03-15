import { Skeleton } from "@chakra-ui/react";
import React from "react";

interface Props {
  isActive: boolean;
  children: React.ReactNode;
}

export default function LoadingCard({ isActive, children }: Props) {
  return <Skeleton>{children}</Skeleton>;
}
