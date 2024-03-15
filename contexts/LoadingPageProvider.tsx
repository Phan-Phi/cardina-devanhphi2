"use client";

import { createContext, useCallback, useEffect } from "react";
import OriginalNProgress from "nprogress";
import { usePathname, useRouter } from "next/navigation";

import "nprogress/nprogress.css";
import { useUpdateEffect } from "@chakra-ui/react";

export const NProgress = OriginalNProgress.configure({
  showSpinner: false,
});

interface LoadingPageProviderProps {
  children: React.ReactNode;
}

export const LoadingPageContext = createContext<{
  startLoadingPage: () => void;
}>({
  startLoadingPage: () => {},
});

const LoadingPageProvider = (props: LoadingPageProviderProps) => {
  const { children } = props;

  const pathname = usePathname();

  const startLoadingPage = useCallback(() => {
    NProgress.start();
  }, []);

  useUpdateEffect(() => {
    const url = `${pathname}`;
    NProgress.done();
  }, [pathname]);

  return (
    <LoadingPageContext.Provider value={{ startLoadingPage }}>
      {children}
    </LoadingPageContext.Provider>
  );
};

export default LoadingPageProvider;
