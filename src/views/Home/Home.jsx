import { NavLink } from "react-router-dom";

import { Block } from "../../components/Block";
import styles from "./Home.module.css";

export const Home = () => (
  <div id="home" className="flex-row">
    <div className={styles.about}>
      <Block>
        <h1>Julio Avantt!</h1>
        <h2>Enseño tecnología a las generaciones que dominarán el futuro.</h2>
        <p>
          Apasionado por compartir conocimiento en <strong>Programación</strong>
          , <strong>IA</strong> y <strong>Data Science</strong>, combinando
          docencia, liderazgo y creación de contenido.
        </p>
      </Block>
      <div className={styles.buttons}>
        <NavLink to="/laboral-experience"><button className={styles.menu_mini}>Experiencia Laboral</button></NavLink>
        <NavLink to="/content-creator"><button className={styles.menu_mini}>Creador de Contenido</button></NavLink>
        <a href="https://www.youtube.com/@juniorpride" target="_blank">
          <button>
            <span className="material-symbols-outlined">play_circle</span>{" "}
            Visitá mi canal @juniorpride
          </button>
        </a>
        <a href="https://www.linkedin.com/in/julio-avantt/" target="_blank">
          <button className={styles.linkedin}>
            <span className="material-symbols-outlined">link</span> Visitá mi
            Linkedin
          </button>
        </a>
      </div>
    </div>
    <div className={styles.profile_img_wrapper}>
      {/* <picture>
        <source srcset="/img/profile.avif" type="image/avif" />
        <img src="/img/profile.jpeg" alt="Julio Avantt!" loading="lazy" />
      </picture> */}
      <video autoPlay muted loop playsInline>
        <source src="/videos/profile.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  </div >
);
