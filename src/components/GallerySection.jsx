import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  const closeLightbox = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedIndex(null);
      setIsClosing(false);
      setSwipeDirection(null);
    }, 250); // match CSS animation duration
  };

  const goNext = useCallback(() => {
  setSelectedIndex((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );
}, [images.length]);

const goPrev = useCallback(() => {
  setSelectedIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
}, [images.length]);

  // Lock scroll + keyboard nav
  useEffect(() => {
  if (selectedIndex !== null) {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
}, [selectedIndex, goNext, goPrev]);


  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Horizontal swipe → change image
    if (absX > absY && absX > 60) {
      if (deltaX < 0) goNext();
      else goPrev();
      return;
    }

    // Vertical swipe → close
    if (absY > absX && absY > 70) {
      setSwipeDirection(deltaY > 0 ? "down" : "up");
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
              onClick={() => setSelectedIndex(index)}
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
          onWheel={(e) => {
            // Desktop horizontal scroll navigation
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
              if (e.deltaX > 0) goNext();
              else goPrev();
            }
          }}
        >
          {/* Left Arrow */}
          <button
            className={`${styles.nav} ${styles.left}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <span className={styles.chevron}></span>
          </button>

          {/* Image */}
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

          {/* Right Arrow */}
          <button
            className={`${styles.nav} ${styles.right}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <span className={`${styles.chevron} ${styles.rightChevron}`}></span>
          </button>

          {/* Close */}
          <span
            className={styles.close}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ×
          </span>
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
