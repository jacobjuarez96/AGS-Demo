import { useState } from "react";
import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.grid}>
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`${title} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imageWrapper}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${styles.image} ${loaded ? styles.loaded : ""}`}
      />
    </div>
  );
}
