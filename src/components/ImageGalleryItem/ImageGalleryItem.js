import styles from "./ImageGalleryItem.module.css";

export function ImageGalleryItem({ id, src, alt }) {
  return (
    <li className={styles.item} key={id}>
      <img src={src} alt={alt} className={styles.image} />
    </li>
  );
}
