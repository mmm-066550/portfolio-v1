// Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "/styles/fonts.sass";
import "/styles/global.sass";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GY3LQ5SDG9`}
      />
      <Script id={"google-analytics"} strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GY3LQ5SDG9');`}
      </Script>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
