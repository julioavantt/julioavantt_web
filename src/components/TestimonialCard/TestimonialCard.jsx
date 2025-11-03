import styles from "./TestimonialCard.module.css";

export const TestimonialCard = ({ item }) => {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar_wrapper}>
          <img
            src={`/img/testimonials/${item.avatar}`}
            alt={item.name}
            className={styles.avatar}
          />
        </div>
        <div>
          <h4>{item.name}</h4>
          <p className={styles.role}>{item.role}</p>
        </div>
      </div>
      <blockquote className={styles.content}>{item.recommendation}</blockquote>
    </section>
  );
};
