import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, activeTab }) => {
  return (
    <>
      <Header activeTab={activeTab} />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
