import styles from "./YouTubeCard.module.css";

export const YouTubeCard = ({ item }) => (
  <a href={item.url} target="_blank" className={styles.card}>
    <picture>
      <source srcset={`/img/youtube/${item.img}.avif`} type="image/avif" />
      <img
        src={`/img/youtube/${item.img}.jpg`}
        alt={item.title}
        loading="lazy"
        className={styles.img}
      />
    </picture>
    <div>
      <h4>{item.title}</h4>
    </div>
  </a>
);
