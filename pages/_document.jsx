import React from "react";
import { Html, Head, NextScript, Main } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/kursor/dist/kursor.css"
        />
        <Script src="https://unpkg.com/kursor"></Script>
      </Head>
      <body data-color="blue">
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
