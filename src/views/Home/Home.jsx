import styles from "./Home.module.css";

export const Home = () => (
  <div className="flex-row">
    <div className={styles.about}>
      <h1>Julio Avantt!</h1>
      <h2>
        Enseño tecnología a las generaciones que dominarán el futuro.
      </h2>
      <p>
        Apasionado por compartir conocimiento en Programación, IA y Data Science, combinando docencia, liderazgo y creación de contenido.
      </p>
    </div>
    <div className={styles.profile_img_wrapper}>
      <img src="/assets/img/profile.jpeg" alt="Julio Avantt!" />
    </div>
  </div>
);
