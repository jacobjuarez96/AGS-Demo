import { useState, useEffect } from "react";
import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const closeLightbox = () => {
  setIsClosing(true);

  // Keep body locked during animation
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    setSelectedImage(null);
    setIsClosing(false);
    setScrollDirection(null);

    // Small delay to let scroll momentum die
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 50);
  }, 250);
};


  // Scroll lock + Escape key
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeLightbox();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

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

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onWheel={(e) => {
            e.preventDefault(); // stop scroll from reaching body
            e.stopPropagation();

            if (!isClosing) {
              setScrollDirection(e.deltaY > 0 ? "down" : "up");
              closeLightbox();
            }
          }}

        >
          <span
            className={styles.close}
            onClick={closeLightbox}
          >
            ×
          </span>

          <img
            src={selectedImage}
            alt="Expanded work"
            className={`${styles.lightboxImage} 
              ${isClosing ? styles[`closing-${scrollDirection}`] : ""}`}
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
