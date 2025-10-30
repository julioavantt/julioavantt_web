import { experienciaLaboral } from "../../consts/experiencia-laboral";
import styles from "./Block.module.css";

export const Block = () => {
  return (
    <section className={styles.block}>
      <h3>Experiencia Laboral: EdTech</h3>
      <p>
        Compartiendo conocimiento y pasión por la tecnología, formando a la
        próxima generación de desarrolladores.
      </p>
      <section className={styles.pills}>
        <div className={styles.pill}>Todos</div>
      </section>
      <section>
        {experienciaLaboral.edtech.map((item) => (
          <article key={item.id}>
            <h4>
              {item.role} -{" "}
              <span className={styles.company}>{item.company}</span>
            </h4>
            <p>{item.date}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
