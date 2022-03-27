import React from "react";
import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body data-color="blue">
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
