import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          index={index}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
