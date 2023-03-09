import ContactForm from "@/components/ContactForm/ContactForm";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";

const ContactPage = () => {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Vidakovic design | Contact"
        openGraph={{
          url: `${config.url}contact`,
          title: "Vidakovic design | Contact",
        }}
      />
      <Layout activeTab="contact">
        <PageTitle
          title="Old school? Alright than."
          descriptionClass="contact"
          description={
            <>
              If you are not into video calls and all those things, I will check
              my Inbox.
            </>
          }
        />
        <ContactForm />
      </Layout>
    </>
  );
};

export default ContactPage;
