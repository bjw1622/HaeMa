import Footer from "./footer";
import Navbar from "./Navbar/navbar";
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
