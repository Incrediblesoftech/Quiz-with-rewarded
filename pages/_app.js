// pages/_app.js
import Head from "next/head";
import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScoreProvider } from "../context/ScoreContext";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>

      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossOrigin="anonymous"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.adsbygoogle = window.adsbygoogle || [];
              window.adConfig = function(o){ window.adsbygoogle.push(o); };
              window.adBreak = window.adConfig;

              window.adConfig({
                preloadAdBreaks: "on"
              });
            `,
          }}
        />
      </Head>

      <ScoreProvider>
        <div className="bg-primary1 ls:w-[360px] flex flex-col mx-auto">
          <GA4Initializer />
          <Component {...pageProps} />

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick={false}
            rtl={false}
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </div>
      </ScoreProvider>
    </Fragment>
  );
}