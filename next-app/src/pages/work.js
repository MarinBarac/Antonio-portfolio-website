import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import FeatureSection from "@/components/WorkPage/FeatureSection/FeatureSection";
import CoffeeChat from "@/components/CoffeeChat/CoffeeChat";
import MyWorkSection from "@/components/MyWork/MyWorkSection";

const WorkPage = () => {
  return (
    <>
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
