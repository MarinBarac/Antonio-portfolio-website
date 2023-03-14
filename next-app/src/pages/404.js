import Script from "next/script";

const { default: Layout } = require("@/components/Layout/Layout");
const { default: NotFound } = require("@/components/NotFound/NotFound");

const NotFoundPage = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="after-interactive"
        dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D0WMT17P9R');
        `}
      />
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};

export default NotFoundPage;
