import "react-toastify/dist/ReactToastify.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/main.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import SEO from "@bradgarropy/next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*   <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js??id=G-33Z53GSFZ2"`}
      /> */}

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3195590881637489"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-33Z53GSFZ2');`}
      </Script>

      <SEO
        title="Tejas Chaudhari | Software Developer | Nandurbar | Tejas Sanjay Chauhdari"
        description="Hey, I'm Tejas Chaudhari a Software Developer from Nandurbar, Maharashtra. Here's my portfolio where you can see all my projects, blogs, and achievements."
        keywords={[
          "Tejas Chaudhari",
          "Tejas Sanjay Chaudhari",
          "Tejas Developer",
          "Tejas Nandurbar",
          "Nandurbar",
          "Dhule",
          "Tejas Codes",
          "software developer",
          "web developer",
          "website",
          "blog",
          "portfolio",
          "tejas networks share price",
          "tejas express",
          "tejas thackeray",
          "hal tejas",
          "tejas aircraft",
          "tejas meaning in hindi",
          "tejas express mumbai to delhi",
        ]}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
