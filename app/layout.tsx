import type { Metadata, Viewport } from "next";

import { ChakraProvider } from "@/hocs";
import { Footer, Header } from "@/compositions";
import { LoadingPageProvider } from "@/contexts";
import { cookies, headers } from "next/headers";
import { initConfigColorMode, baseFont } from "@/hocs";
import Layout from "@/compositions/Layout/Layout";
import SWR from "@/contexts/SWR";
import Setting from "@/contexts/Setting";

export const metadata: Metadata = {
  title: "Cardina",
  description: "Cardina Website",
};

export const viewPort: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme =
    cookies().get("chakra-ui-color-mode")?.value ??
    initConfigColorMode.initialColorMode;

  return (
    <html
      lang="en"
      data-theme={theme}
      style={{
        colorScheme: theme,
      }}
    >
      <body className={`${baseFont.className} chakra-ui-${theme}`}>
        <ChakraProvider cookies={headers().get("cookie")}>
          <LoadingPageProvider>
            <SWR>
              <Setting>
                <Layout>{children}</Layout>
              </Setting>
            </SWR>
          </LoadingPageProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
// pageProps: { initData: []; fallback: [] };
// fallback={pageProps.fallback}
