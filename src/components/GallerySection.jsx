import { useState } from "react";
import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className={styles.section}>
        <h2>{title}</h2>

        <div className={styles.grid}>
          {images.map((src, index) => (
            <LazyImage
              key={index}
              src={src}
              alt={`${title} ${index + 1}`}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <span
            className={styles.close}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </span>

          <img
            src={selectedImage}
            alt="Expanded work"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function LazyImage({ src, alt, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imageWrapper} onClick={onClick}>
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
