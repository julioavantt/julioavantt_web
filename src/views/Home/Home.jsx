import styles from "./Home.module.css";

export const Home = () => (
  <div className="flex-row">
    <div className={styles.about}>
      <h1>Julio Avantt!</h1>
      <h2>
        Frontend & React Senior developer | Mentor, Profesor y contenidista:
        Fundamentos de IA, React, Front End, Javascript, CSS, HTML, Git |
        Director canal YouTube @juniorpride
      </h2>
      <p>
        Experto en Front End en empresas internacionales +17 | Autodidacta de la
        IA | Apasionado por recibir y transmitir conocimientos | Creador de
        video curso y materias en React, HTML, CSS, Javascript, Git | Profesor y
        mentor en React, Git, Javascript, CSS y HTML | Líder | Director canal de
        YouTube @juniorpride | Comunicador
      </p>
    </div>
    <div className={styles.profile_img_wrapper}>
      <img src="/assets/img/julio-avantt-profile.png" alt="Julio Avantt!" />
    </div>
  </div>
);
