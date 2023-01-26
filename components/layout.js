import Footer from "./footer";
import Navbar from "./Nav/navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
