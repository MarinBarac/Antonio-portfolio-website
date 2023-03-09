import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import About from "@/components/Home/About/About";
import Features from "@/components/Home/Features/Features";
import Layout from "@/components/Layout/Layout";
import SEO from "@/components/SEO/SEO";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";

export default function Home() {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Vidakovic design | Home"
        description="I'm UI/UX designer."
        openGraph={{
          url: config.url,
          title: "Vidakovic design",
          description: "I'm UI/UX designer.",
        }}
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
