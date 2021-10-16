import styles from "./ImageGalleryItem.module.css";

export function ImageGalleryItem({ src, alt, index, onClick }) {
  return (
    <li
      className={styles.item}
      onClick={() => {
        console.log("changeIndex: ", index);
        onClick({ openModal: true, openModalIndex: index });
      }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </li>
  );
}
