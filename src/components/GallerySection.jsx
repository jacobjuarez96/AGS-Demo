import { useState, useEffect, useRef } from "react";
import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const closeLightbox = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      setSwipeDirection(null);
    }, 250); // must match CSS animation duration
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // Swipe handlers (mobile only)
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance = touchEndY.current - touchStartY.current;

    if (Math.abs(distance) > 70) {
      setSwipeDirection(distance > 0 ? "down" : "up");
      closeLightbox();
    }
  };

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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
            className={`${styles.lightboxImage} ${
              isClosing && swipeDirection
                ? styles[`closing-${swipeDirection}`]
                : ""
            }`}
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
