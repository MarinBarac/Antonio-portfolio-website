import Script from "next/script";

const { default: Layout } = require("@/components/Layout/Layout");
const { default: NotFound } = require("@/components/NotFound/NotFound");

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
