import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { ErrorBoundary } from "./components";
import Provider from "@/store/provider";
import { URLProvider, UserProvider } from "@/app/context/provider";
import * as process from "process";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Freshcart",
  description: "Freshcart bu yirik online maxsulot do'konilarining jamlanmasi",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://freshcart-uz.vercel.app/",
    siteName: "E-commerce",
    title: "Freshcart",
    description:
      "Freshcart bu yirik online maxsulot do'konilarining jamlanmasi",
    images: [
      {
        url: "https://i.ibb.co/yW3cbGF/freshcart-logo.png",
        width: 1200,
        height: 1200,
        alt: "Freshcart logo",
      },
    ],
  },
};
const inter = Inter({ subsets: ["latin", "cyrillic"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="images/favicon/favicon.ico" />
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
