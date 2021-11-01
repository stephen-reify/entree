import styles from "./styles/Nav.module.scss";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav aria-label="Main">
      <ul className={styles.navigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
