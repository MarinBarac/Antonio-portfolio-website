import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import FeatureSection from "@/components/WorkPage/FeatureSection/FeatureSection";
import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import MyWorkSection from "@/components/MyWork/MyWorkSection";
import { NextSeo } from "next-seo";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import Script from "next/script";

const WorkPage = () => {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Antonio Vidakovic - UX/UI Design Portfolio | Saas Platforms, Web Shops, Marketing Sites, and More"
        description="Explore my portfolio of UX/UI design work, including projects for Saas platforms, web shops, marketing sites, and more. See how I transform quality user experience flows into user interfaces backed by research and psychology. Contact me to discuss your next project."
        openGraph={{
          url: `${config.url}work`,
          title:
            "Antonio Vidakovic - UX/UI Design Portfolio | Saas Platforms, Web Shops, Marketing Sites, and More",
          description:
            "Explore my portfolio of UX/UI design work, including projects for Saas platforms, web shops, marketing sites, and more. See how I transform quality user experience flows into user interfaces backed by research and psychology. Contact me to discuss your next project.",
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
      <Layout activeTab="work">
        <PageTitle
          title="Work"
          description={
            <>
              Well, if you came here looking to see some clients&apos; work say
              a big thank you to NDAs. 😎
              <br />
              <br />
              One thing I can tell you is that clients range from Cloud
              automation solutions and Nautic companies to large webshops and
              marketing websites.
              <br />
              <br />
              At least your work will be permanently hidden from curious
              competition.
            </>
          }
          glowClass="low"
        />
        <FeatureSection />
        <MyWorkSection />
        <CoffeeChat />
      </Layout>
    </>
  );
};

export default WorkPage;
