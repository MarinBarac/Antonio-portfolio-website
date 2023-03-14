import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import About from "@/components/Home/About/About";
import Features from "@/components/Home/Features/Features";
import Layout from "@/components/Layout/Layout";
import SEO from "@/components/SEO/SEO";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function Home() {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design"
        description="As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project."
        openGraph={{
          url: config.url,
          title:
            "Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design",
          description:
            "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
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
      <Layout>
        <HeroBanner />
        <About />
        <Features />
        <CoffeeChat />
        <SEO />
      </Layout>
    </>
  );
}
