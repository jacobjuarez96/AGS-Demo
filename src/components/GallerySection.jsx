import styles from "./GallerySection.module.css";

export default function GallerySection({ title, images }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={src} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
