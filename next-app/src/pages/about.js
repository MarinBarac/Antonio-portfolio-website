import AboutSection from "@/components/AboutPage/AboutSection";
import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function About() {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Experienced UX/UI Designer with a Business Mindset"
        description="With a bachelor's in Business economics and master's in Marketing and communication, I bring a unique perspective to UX/UI design. My focus is on creating quality experiences and interfaces that solve user problems and improve your product. Contact me to learn more."
        openGraph={{
          url: `${config.url}about`,
          title: "Experienced UX/UI Designer with a Business Mindset",
          description:
            "With a bachelor's in Business economics and master's in Marketing and communication, I bring a unique perspective to UX/UI design. My focus is on creating quality experiences and interfaces that solve user problems and improve your product. Contact me to learn more.",
        }}
      />
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
      <Layout activeTab="about">
        <PageTitle
          title="About Antonio"
          description={
            <>
              So you made it here. Congratulations.
              <br />
              If you are not into reading about the short life story of some
              internet stranger named Antonio, skip to the Contact page.
              <br />
              No hard feelings.
            </>
          }
          mobileDescription={
            <>
              So you made it here. Congratulations.
              <br />
              <br />
              If you are not into reading about the short life story of some
              internet stranger named Antonio, skip to the Contact page.
              <br />
              No hard feelings.
            </>
          }
        />
        <AboutSection />
        <CoffeeChat />
      </Layout>
    </>
  );
}
