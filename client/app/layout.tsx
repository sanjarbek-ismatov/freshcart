import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { ErrorBoundary } from "./components";
import Provider from "@/store/provider";
import { UserProvider } from "@/app/context/provider";

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
        <title>Fresh cart</title>
      </head>
      <body className={inter.className}>
        <React.StrictMode>
          <ErrorBoundary>
            <Provider>
              <UserProvider>{children}</UserProvider>
            </Provider>
          </ErrorBoundary>
        </React.StrictMode>
      </body>
    </html>
  );
}
