import ContactForm from "@/components/ContactForm/ContactForm";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";

const ContactPage = () => {
  return (
    <>
      <Layout activeTab="contact">
        <PageTitle
          title="Old school? Alrgith than."
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
