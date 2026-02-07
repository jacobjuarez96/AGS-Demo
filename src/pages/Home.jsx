 import styles from "./Home.module.css";
import image_1 from "../assets/highlight_image_1.jpg"
// import image_2 from "../assets/highlight_image_2.jpg"

function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>

        <div className={styles.action_text}>
          <h1>Aligning vision <br></br>and action</h1>
        </div>

        <div className={styles.action_button}>
          <p>reach out to our team</p>
        </div>
        
      </div>
    </section>

    <section className={styles.mission}> 
        <div className={styles.mission_statement}>
          <h2>
            At Apex Graphic Solutions, we transform spaces with precision and style. Our expert team brings your vision to life through professional <span>graphic installation</span>, from bold signage to immersive visuals. With innovative techniques and meticulous attention to detail, every project stands out.
          </h2>
        </div>
        <div className={styles.vertical_divider}>

        </div>
        <div className={styles.service_overview}>
          <h3>
            privacy windows
          </h3>
        </div>
    </section>

    <section className={styles.hero_highlights_container}>
      <div className={styles.hero_highlights}>
        <div className={styles.highlights_title}>
          <h2>
            Transform spaces with precision and style
          </h2>
        </div>
        <div className={styles.highlights_content_container}>
          <div className={styles.content_wrapper}>
            <div className={styles.highlights_content}>
              <div className={styles.highlight_image_1}>
                <img src={image_1} alt="privacy window"></img>
              </div>
              <p>privacy windows</p>
            </div>
            <div className={styles.highlights_content}>
              <div className={styles.highlight_image_2}>
                {/* <img src={image_2}></img> */}
              </div>
              <p>Academy Sports Wall Interior 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero_highlights}>
        <div className={styles.highlights_title}>
          <h2>
            Our products meet the highest standards
          </h2>
        </div>
        <div className={styles.highlights_content_container}>
          <div className={styles.content_wrapper}>
            <div className={styles.highlights_content}>
              <div className={styles.highlight_image_1}>
                {/* <img src={image_1} ></img> */}
              </div>
              <p>privacy windows</p>
            </div>
            <div className={styles.highlights_content}>
              <div className={styles.highlight_image_2}>
                {/* <img src={image_2}></img> */}
              </div>
              <p>Academy Sports Wall Interior 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
