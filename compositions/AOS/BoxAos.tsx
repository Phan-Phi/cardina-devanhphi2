"use client";

import Aos, { AosOptions } from "aos";
import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";

import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

export default function BoxAos({ children, active = false }: Props) {
  // console.log("🚀 ~ BoxAos ~ active:", active);
  // window.location.reload(() => {
  //   Aos.refresh();
  // });
  const scrollRef = useRef(null);
  // console.log("🚀 ~ BoxAos ~ scrollRef:", scrollRef.current);
  const [isActive, setIsActive] = useState<boolean>(false);
  // console.log("🚀 ~ BoxAos ~ isActive:", isActive);

  useEffect(() => {
    // console.log("render");
    Aos.init({
      // delay: 2000,/
      // disable: false,
      // startEvent: "load",
      // initClassName: "aos-init",
      // animatedClassName: "aos-animate",
      // useClassNames: false,
      // disableMutationObserver: false,
      // debounceDelay: 50,
      // throttleDelay: 99,
      // offset: 20,
      // delay: 0,
      duration: 800,
      // easing: "ease-in-out-quad",
      // once: false,
      // mirror: false,
      // anchorPlacement: "top-bottom",
    });

    // Aos.refresh();
  });

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     Aos.refresh();
  //   });
  // });
  function isInViewport(element: any) {
    const rect = element.getBoundingClientRect();

    // console.log("1", window.innerHeight);
    // console.log("2", document.documentElement.clientHeight);
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  useEffect(() => {
    const box = document.querySelector(".HomeBanner");
    // console.log("🚀 ~ useEffect ~ box:", box);
    // const rect = box.getBoundingClientRect();
    // console.log("🚀 ~ useEffect ~ rect:", rect);

    const result = isInViewport(box);
    // console.log("🚀 ~ useEffect ~ result:", result);
  });

  return (
    <Box className="HomeBanner">
      <div ref={scrollRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        />
      </div>

      <Box
        data-aos="fade-up"
        data-aos-once="true"
        // data-aos-mirror="true"
        // data-aos-offset="1"
        // disableMutationObserver="true"
        // {...active}
      >
        {children}
      </Box>

      {/* <Button
        onClick={() => {
          // setIsActive(true);
          // window.location.reload(() => {
          //   Aos.refresh();
          // });
        }}
      >
        demo
      </Button> */}
    </Box>
  );
}
