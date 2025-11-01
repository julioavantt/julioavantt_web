import styles from "./YouTubeCard.module.css";

export const YouTubeCard = ({ item }) => {
  return (
    <a href={item.url} target="_blank">
      <section className={styles.card}>
        <img
          src={`/assets/img/youtube/`}
          alt={item.title}
          className={styles.avatar}
        />
        <div>
          <h4>{item.title}</h4>
        </div>
      </section>
    </a>
  );
};
