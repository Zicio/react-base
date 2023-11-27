import { NavLink, useMatch } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const matchPosts = useMatch("/posts");
  const matchAbout = useMatch("/about");
  return (
    <nav className={styles.nav}>
      <NavLink
        className={`${styles.navLink} ${matchPosts ? `${styles.active}` : ""}`}
        to={"/posts"}
      >
        Posts
      </NavLink>
      <NavLink
        className={`${styles.navLink} ${matchAbout ? `${styles.active}` : ""}`}
        to={"/about"}
      >
        About
      </NavLink>
    </nav>
  );
};
export default NavBar;
