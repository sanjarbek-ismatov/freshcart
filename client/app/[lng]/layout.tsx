import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { ErrorBoundary } from "./components";
import * as process from "process";
import { getSSRData } from "./utils/getData";
import Provider from "@store/provider";
import { URLProvider, UserProvider } from "@/app/context/provider";

interface SiteInfo {
  title: string;
  description: string;
  image: string;
}

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const siteInfo = await getSSRData<SiteInfo>(
    `${process.env.SERVER_URL}/general/info`,
  );
  return (
    <html lang={lng}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="images/favicon/favicon.ico" />

        <title>{siteInfo.title}</title>
        <meta name="description" content={siteInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:url" content="https://freshcart-uz.vercel.app/" />
        <meta property="og:site_name" content="E-commerce" />
        <meta property="og:title" content={siteInfo.title} />
        <meta property="og:description" content={siteInfo.description} />
        <meta property="og:image" content={siteInfo.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Freshcart logo" />
      </head>
      <body className={inter.className}>
        <React.StrictMode>
          <ErrorBoundary>
            <URLProvider url={process.env.SERVER_URL || ""}>
              <Provider>
                <UserProvider>{children}</UserProvider>
              </Provider>
            </URLProvider>
          </ErrorBoundary>
        </React.StrictMode>
      </body>
    </html>
  );
}
