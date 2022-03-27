import React from "react";
import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/kursor/dist/kursor.css"
        />
      </Head>
      <body data-color="blue">
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
