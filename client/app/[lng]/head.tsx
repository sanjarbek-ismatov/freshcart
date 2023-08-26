import React from "react";
import { getSSRData } from "@/app/utils/getData";
import process from "process";

interface SiteInfo {
  title: string;
  description: string;
  image: string;
}

async function Head() {
  const siteInfo = await getSSRData<SiteInfo>(
    `${process.env.SERVER_URL}/general/info`,
  );
  return (
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
  );
}

export default Head;
