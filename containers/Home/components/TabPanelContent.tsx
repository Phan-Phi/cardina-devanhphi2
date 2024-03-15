// export default const TabPanelContent = ({ children, changeHeight }) => {
//     const currentPanelRef = useRef(document.createElement('div'))
//     useEffect(() => {
//       changeHeight(currentPanelRef.current.clientHeight + 'px')
//     })
//     return (
//       <Box
//         as={motion.div}
//         pos="absolute"
//         ref={currentPanelRef}
//       >
//         {children}
//       </Box>
//     )
// }
"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function TabPanelContent({ children, changeHeight }: any) {
  const currentPanelRef = useRef(document.createElement("div"));
  useEffect(() => {
    changeHeight(currentPanelRef.current.clientHeight + "px");
  });
  return (
    <Box as={motion.div} pos="absolute" ref={currentPanelRef}>
      1dasdasd
    </Box>
  );
}
