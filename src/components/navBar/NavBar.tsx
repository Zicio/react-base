import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? `${styles.active}` : ""}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? `${styles.active}` : ""}`
        }
        to={"/about"}
      >
        About
      </NavLink>
    </nav>
  );
};
export default NavBar;
