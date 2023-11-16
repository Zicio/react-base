import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <h1>React Base</h1>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
