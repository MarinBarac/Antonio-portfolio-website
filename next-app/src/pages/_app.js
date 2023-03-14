import useSiteConfig from "@/shared/hooks/useSiteConfig";
import OgImage from "@assets/images/og-image.jpg";
import safariPinnedTab from "@assets/icons/favicons/safari-pinned-tab.svg";
import appleTouch from "@assets/icons/favicons/apple-touch-icon.png";
import androidIcon from "@assets/icons/favicons/android-chrome-144x144.png";
import favicon16 from "@assets/icons/favicons/favicon-16x16.png";
import favicon32 from "@assets/icons/favicons/favicon-32x32.png";
import favicon from "@assets/favicon.ico";
import "@/styles/globals.scss";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const config = useSiteConfig();

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en-IE",
          siteName: "Vidakovic design",
          title: "Vidakovic design",
          images: [
            {
              url: `${config.url}${OgImage.src}`,
              width: 1200,
              height: 630,
              alt: "UX/UI designer",
            },
          ],
        }}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          property="og:image"
          content="https://vidakovic.design/assets/images/og-image.jpg"
        />

        <link rel="mask-icon" href={safariPinnedTab.src} color="#000000" />
        <link rel="icon" href={favicon16.src} type="image/png" sizes="16x16" />
        <link rel="icon" href={favicon32.src} type="image/png" sizes="32x32" />
        <link
          rel="icon"
          href={androidIcon.src}
          type="image/png"
          sizes="144x144"
        />
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
