import ContactForm from "@/components/ContactForm/ContactForm";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";
import useSiteConfig from "@/shared/hooks/useSiteConfig";
import { NextSeo } from "next-seo";
import Script from "next/script";

const ContactPage = () => {
  const config = useSiteConfig();

  return (
    <>
      <NextSeo
        title="Contact Antonio Vidakovic - Freelance UX/UI Designer for Hire"
        description="Are you looking for a freelance UX/UI designer to help you improve your product and solve user problems? Let's collaborate! Contact me today to discuss your project and learn how I can help you achieve your goals."
        openGraph={{
          url: `${config.url}contact`,
          title:
            "Contact Antonio Vidakovic - Freelance UX/UI Designer for Hire",
          description:
            "Are you looking for a freelance UX/UI designer to help you improve your product and solve user problems? Let's collaborate! Contact me today to discuss your project and learn how I can help you achieve your goals.",
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
