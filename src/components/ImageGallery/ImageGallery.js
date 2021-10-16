import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
// import ImageApi from "../services/pixabay";
import styles from "./ImageGallery.module.css";

export default function ImageStateCar({ images: { hits } }) {
  console.log(hits);

  const imagesList = hits;

  return (
    <ul className={styles.gallery}>
      {imagesList.map((image) => (
        <ImageGalleryItem
          id={image.id}
          src={image.webformatURL}
          alt={image.tags}
        />
      ))}
    </ul>
  );
}
