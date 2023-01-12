import Navbar from "./navbar/navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>test</div>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
