import AboutSection from "@/components/AboutPage/AboutSection";
import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";

export default function About() {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Vidakovic design | About"
        description="Passionate UX/UI designer..."
        openGraph={{
          url: `${config.url}about`,
          title: "Vidakovic design | About",
          description: "Passionate UX/UI designer...",
        }}
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
