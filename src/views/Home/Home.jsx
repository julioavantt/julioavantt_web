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
        <a href="https://www.youtube.com/@juniorpride" target="_blank">
          <button>
            <span className="material-symbols-outlined">play_circle</span>{" "}
            Visitá mi canal @juniorpride
          </button>
        </a>
        <a href="https://www.linkedin.com/in/julio-avantt/" target="_blank">
          <button className={styles.linkedin}>
            <span class="material-symbols-outlined">link</span> Visitá mi
            Linkedin
          </button>
        </a>
      </div>
    </div>
    <div className={styles.profile_img_wrapper}>
      <img src="/img/profile.jpeg" alt="Julio Avantt!" />
    </div>
  </div>
);
