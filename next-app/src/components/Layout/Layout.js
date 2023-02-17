import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, activeTab }) => {
  return (
    <>
      <Header activeTab={activeTab} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
