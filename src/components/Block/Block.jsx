import { useState } from "react";

import experienciaLaboral from "../../consts/laboral-experience.json";
import testimonials from "../../consts/testimonials.json";
import styles from "./Block.module.css";
import { Card } from "../Card";

const pills = experienciaLaboral.edtech.reduce((acc, item) => {
  item.techs.forEach((tech) => {
    if (!acc.includes(tech)) acc.push(tech);
  });
  return acc.sort((a, b) => b - a);
}, []);

export const Block = () => {
  const [activePill, setActivePill] = useState(0);
  const [list, setList] = useState(experienciaLaboral);
  const [hideRecomendations, setHideRecomendations] = useState(true);

  const refreshList = (pill) => {
    if (pill === "Todos") {
      setList(experienciaLaboral);
      setActivePill(0);
    } else {
      const filteredList = experienciaLaboral.edtech.filter((item) =>
        item.techs.includes(pill)
      );
      setList({ edtech: filteredList });
      setActivePill(pills.indexOf(pill) + 1);
    }
  };

  return (
    <section className={styles.block}>
      {hideRecomendations ? (
        <section id="jobs">
          <h3>
            Experiencia Laboral: EdTech
            <span
              onClick={() => setHideRecomendations(false)}
              className={styles.pill}
            >
              Recomendaciones Destacadas
            </span>
          </h3>
          <p>
            Compartiendo conocimiento y pasión, formando a la próxima generación
            de creadores de tecnología.
          </p>
          <section className={styles.pills}>
            <div
              className={`${styles.pill} ${
                activePill === 0 ? styles.active : ""
              }`}
              onClick={() => refreshList("Todos")}
            >
              Todos
            </div>
            {pills.map((pill, index) => (
              <div
                key={pill}
                className={`${styles.pill} ${
                  activePill === index + 1 ? styles.active : ""
                }`}
                onClick={() => refreshList(pill)}
              >
                {pill}
              </div>
            ))}
          </section>
          <section className={styles.timeline}>
            {list.edtech.map((item) => (
              <article key={item.id} className={styles.timelineItem}>
                <span className="material-symbols-outlined">school</span>
                <div className={styles.timelineContent}>
                  <h4>
                    {item.role} - {""}
                    <span className={styles.company}>{item.company}</span>
                  </h4>
                  <p className={styles.date}>{item.date}</p>
                </div>
              </article>
            ))}
          </section>
        </section>
      ) : (
        <section>
          <h3>
            Recomendaciones destacadas
            <span
              onClick={() => setHideRecomendations(true)}
              className={styles.pill}
            >
              Experiencia Laboral: EdTech
            </span>
          </h3>
          <p>
            Como ve la comunidad tecnológica, los colegas y los estudiantes.
          </p>
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </section>
      )}
    </section>
  );
};
