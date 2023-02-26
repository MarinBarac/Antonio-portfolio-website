import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function About() {
  return (
    <>
      <Layout activeTab="about">
        <PageTitle
          title="About Antonio"
          description={
            <>
              So you made it here. Congratulations.<br />If you are not into reading
              about the short life story of some internet stranger named
              Antonio, skip to the Contact page.<br />No hard feelings.
            </>
          }
        />
      </Layout>
    </>
  );
}
