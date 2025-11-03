import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

export const Navbar = () => (
  <nav className={styles.navbar}>
    <NavLink to="/" className={styles.brand}>
      <img src={`/img/avatar.png`} alt="Avatar" />
      <span>Julio Avantt!</span>
    </NavLink>
    <ul className={styles.list}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/laboral-experience">Experiencia Laboral</NavLink>
      </li>
      <li>
        <NavLink to="/content-creator">Creador de Contenido</NavLink>
      </li>
      <li className={styles.return_home}>
        <NavLink to="/">Volver a Home</NavLink>
      </li>
    </ul>
  </nav>
);
