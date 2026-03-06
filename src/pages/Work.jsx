import styles from "./Work.module.css";
import GallerySection from "../components/GallerySection";

import privacy1 from "../assets/gallery-resized/privacy1.webp";
import privacy2 from "../assets/gallery-resized/privacy2.webp";
import privacy3 from "../assets/gallery-resized/privacy3.webp";
import privacy4 from "../assets/gallery-resized/privacy4.webp";
import privacy5 from "../assets/gallery-resized/privacy5.webp";
import privacy6 from "../assets/gallery-resized/privacy6.webp";

import vinyl1 from "../assets/gallery-resized/vinyl1.webp"
import vinyl2 from "../assets/gallery-resized/vinyl2.webp"
import vinyl3 from "../assets/gallery-resized/vinyl3.webp"
import vinyl4 from "../assets/gallery-resized/vinyl4.webp"
import vinyl5 from "../assets/gallery-resized/vinyl5.webp"
import vinyl6 from "../assets/gallery-resized/vinyl6.webp"
import vinyl7 from "../assets/gallery-resized/vinyl7.webp"
import vinyl8 from "../assets/gallery-resized/vinyl8.webp"

import frame1 from "../assets/gallery-resized/frame1.webp"
import frame2 from "../assets/gallery-resized/frame2.webp"
import frame3 from "../assets/gallery-resized/frame3.webp"
import frame4 from "../assets/gallery-resized/frame4.webp"

import exterior1 from "../assets/gallery-resized/exterior1.webp"
import exterior2 from "../assets/gallery-resized/exterior2.webp"
import exterior3 from "../assets/gallery-resized/exterior3.webp"

import lettering1 from "../assets/gallery-resized/lettering1.webp"
import lettering2 from "../assets/gallery-resized/lettering2.webp"
import lettering3 from "../assets/gallery-resized/lettering3.webp"
import lettering4 from "../assets/gallery-resized/lettering4.webp"
import lettering5 from "../assets/gallery-resized/lettering5.webp"
import lettering6 from "../assets/gallery-resized/lettering6.webp"
import lettering7 from "../assets/gallery-resized/lettering8.webp"



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
          images={[privacy1, privacy2, privacy3, privacy4, privacy5, privacy6]}
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

        <GallerySection
          title="Dimensional Lettering"
          images={[lettering1, lettering2, lettering3, lettering4, lettering5, lettering6, lettering7]}
        />

      </div>
    </div>
  );
}
