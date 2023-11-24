import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import NavBar from "../navBar/NavBar";

const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <h1>React Base</h1>
        <NavBar />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
