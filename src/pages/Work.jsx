import styles from "./Work.module.css";
import GallerySection from "../components/GallerySection";
import privacy1 from "../assets/gallery-images/privacy1.jpg";
import privacy2 from "../assets/gallery-images/privacy2.jpg";
import privacy3 from "../assets/gallery-images/privacy3.jpg";
import vinyl1 from "../assets/gallery-images/vinyl1.jpg"
import vinyl2 from "../assets/gallery-images/vinyl2.jpg"
import vinyl3 from "../assets/gallery-images/vinyl3.jpg"
import vinyl4 from "../assets/gallery-images/vinyl4.jpg"
import vinyl5 from "../assets/gallery-images/vinyl5.jpg"
import vinyl6 from "../assets/gallery-images/vinyl6.jpg"
import vinyl7 from "../assets/gallery-images/vinyl7.jpg"
import vinyl8 from "../assets/gallery-images/vinyl8.jpg"
import frame1 from "../assets/gallery-images/frame1.jpg"
import frame2 from "../assets/gallery-images/frame2.jpg"
import frame3 from "../assets/gallery-images/frame3.jpg"
import frame4 from "../assets/gallery-images/frame4.jpg"
import exterior1 from "../assets/gallery-images/exterior1.jpg"
import exterior2 from "../assets/gallery-images/exterior2.jpg"
import exterior3 from "../assets/gallery-images/exterior3.jpg"






export default function Work() {
  return (
    <div className={styles.workPage}>
      
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <h1>Our Work</h1>
      </section>

      {/* Sections */}
      <div className={styles.content}>

        <GallerySection
          title="Privacy Windows"
          images={[privacy1, privacy2, privacy3]}
        />

        <GallerySection
          title="Wall Vinyl"
          images={[vinyl1, vinyl2, vinyl3, vinyl4, vinyl5, vinyl6, vinyl7, vinyl8]}
        />

        <GallerySection
          title="Wall Frames"
          images={[frame1, frame2, frame3, frame4]}
        />

        <GallerySection
          title="Exterior Work"
          images={[exterior1, exterior2, exterior3]}
        />

      </div>
    </div>
  );
}
