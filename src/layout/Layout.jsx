import { Outlet } from "react-router";
import Header from "../components/organisms/Header/Header";
import { AuthProvider } from "../context/auth/AuthProvider";
import Footer from "../components/organisms/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;