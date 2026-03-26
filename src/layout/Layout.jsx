import { Outlet } from "react-router";
import Header from "../components/organisms/Header/Header";
import { AuthProvider } from "../context/auth/AuthProvider";
import Footer from "../components/organisms/Footer/Footer";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;