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
import { useEffect } from "react";
import { useRouter } from "next/router";

const GA_MEASUREMENT_ID = "G-D0WMT17P9R";

const pageView = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const config = useSiteConfig();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-D0WMT17P9R"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D0WMT17P9R', {
    page_path: window.location.pathname,
  });`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
