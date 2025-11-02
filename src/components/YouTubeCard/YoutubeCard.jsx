import styles from "./YouTubeCard.module.css";

export const YouTubeCard = ({ item }) => (
  <a href={item.url} target="_blank" className={styles.card}>
    <img
      src={`/assets/img/youtube/${item.img}`}
      alt={item.title}
      className={styles.img}
    />
    <div>
      <h4>{item.title}</h4>
    </div>
  </a>
);
