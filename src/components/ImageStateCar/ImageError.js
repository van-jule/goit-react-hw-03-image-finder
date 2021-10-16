import error from "./error.jpg";
import styles from "./ImageError.module.css";

export default function ImageError({ message }) {
  return (
    <div role="alert" className={styles.wrap}>
      <img className={styles.image} src={error} width="100" alt="error" />
      <p className={styles.text}>{message}</p>
    </div>
  );
}
