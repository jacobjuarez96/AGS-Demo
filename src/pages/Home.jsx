import styles from "./Home.module.css";
import image_1 from "../assets/highlight_image_1.png"
import image_2 from "../assets/highlight_image_2.jpg"
import image_3 from "../assets/highlight_image_3.jpg"
import image_4 from "../assets/highlight_image_4.png"
import client_logo_1 from "../assets/client-logos/academy-logo.svg"
import client_logo_2 from "../assets/client-logos/in-n-out-logo.svg"
import client_logo_3 from "../assets/client-logos/amazon-logo.svg"
import client_logo_4 from "../assets/client-logos/ut-logo.svg"
import client_logo_5 from "../assets/client-logos/sprint-logo.svg"
import client_logo_6 from "../assets/client-logos/google-logo.svg"
import closer_1 from "../assets/closing-images/closer_1.jpg"
import closer_2 from "../assets/closing-images/closer_2.png"
import closer_3 from "../assets/closing-images/closer_3.jpg"
import closer_4 from "../assets/closing-images/closer_4.jpg"




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


      {/*         Next Section MISSION                  */}



      <section className={styles.mission}>
        <div className={styles.mission_statement}>
          <h2>
            At Apex Graphic Solutions, we transform spaces with precision and style. Our expert team brings your vision to life through professional <span>graphic installation</span>, from bold signage to immersive visuals. With innovative techniques and meticulous attention to detail, every project stands out.
          </h2>
        </div>
        <div className={styles.vertical_divider}>

        </div>
        <div className={styles.service_overview}>
          <ul>
            <li>
              <h3>privacy windows</h3>
            </li>
            <li>
              <h3>custom designs</h3>
            </li>
            <li>
              <h3>wall murals</h3>
            </li>
            <li>
              <h3>vinyl</h3>
            </li>
            <li>
              <h3>ada signage</h3>
            </li>
            <li>
              <h3>wall paper</h3>
            </li>
          </ul>

        </div>
      </section>

      {/*         Next Section                       */}

      <section className={styles.hero_highlights_container}>
        <div className={styles.hero_highlights}>
          <div className={styles.highlights_title}>
            <h2>
              Transform spaces with <span>precision and style</span>
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
                  <img src={image_2} alt="academy content"></img>
                </div>
                <p>Academy Sports Wall Interior 2025</p>
              </div>
            </div>
          </div>
        </div>



        <div className={styles.hero_highlights}>
          <div className={styles.highlights_title}>
            <h2>
              Our products meet the <span>highest standards</span>
            </h2>
          </div>
          <div className={styles.highlights_content_container}>
            <div className={styles.content_wrapper}>
              <div className={styles.highlights_content}>
                <div className={styles.highlight_image_3}>
                  <img src={image_3} alt='football frame'></img>
                </div>
                <p>privacy windows</p>

                <div className={styles.highlight_comment}>
                  <h2>
                    <span>5-Star</span> Installation Experience
                  </h2>
                </div>
              </div>

              <div className={styles.highlights_content}>
                <div className={styles.highlight_image_4}>
                  <img src={image_4} alt='ut stadium'></img>
                </div>
                <p>Academy Sports Wall Interior 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*         Next Section  View Work                     */}

      <section className={styles.view_work_container}>
        <div className={styles.view_work_wrapper}>
          <div className={styles.view_work_content_container}>
            <h2>View our work</h2>
          </div>
          <div className={styles.view_work_content_container}>
            <p>Discover the results of our collaborations</p>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.black_button}>
              view our portfolio
            </div>
          </div>
        </div>
      </section>

      {/*         Next Section  Clients                    */}

      <section className={styles.view_clients_container}>

        <h2>A sample of clients</h2>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_1} alt="academy logo">
              </img>
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_2} alt="in-n-out logo">
              </img>
            </div>
          </div>
        </div>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_3} alt="amazon logo">
              </img>
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_4} alt="ut logo">
              </img>
            </div>
          </div>
        </div>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_5} alt="sprint logo">
              </img>
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_6} alt="google logo">
              </img>
            </div>
          </div>
        </div>

      </section>



      {/*         Next Section  Closer                    */}

      <section className={styles.hero_closing_container}>

        {/*         Next Section  closer left images                    */}
        <div className={styles.closing_container_left}>
          <div className={styles.closing_images_container}>
            <div className={styles.closing_images_row}>
              <div className={styles.closing_image}>
                <img src={closer_1} alt="hr block"></img>
              </div>
              <div className={styles.closing_image}>
                <img src={closer_2} alt="installer"></img>
              </div>
            </div>
            <div className={styles.closing_images_row}>
              <div className={styles.closing_image}>
                <img src={closer_3} alt="college"></img>
              </div>
              <div className={styles.closing_image}>
                <img src={closer_4} alt="hr block"></img>
              </div>
            </div>
          </div>
        </div>


        {/*         Next Section  closer right info                    */}


        <div className={styles.closing_container_right}>
          <div className={styles.container_right_row}>
            <div className={styles.right_row_wrapper}>
              <h2>Graphic Installation <br></br>Near You</h2>

            </div>

          </div>
          <div className={styles.container_right_row}>
            <div className={styles.right_row_wrapper}>
              <p>
                Based in Middle Tennessee, Apex Graphic Solutions proudly serves businesses throughout the surrounding areas with reliable, high-quality graphic installation services. From local storefronts to large-scale commercial projects, we bring consistency, craftsmanship, and clear communication to every job. Whether you’re refreshing a brand or launching something new, our team is nearby, ready to deliver results you can trust—on time and done right.
              </p>
            </div>
          </div>


          <div className={styles.container_right_row}>

            
            <div className={styles.container_right_contact_container}>
              
              <h5>Reach out to us</h5>
              <div className={styles.black_button}>
                contact
              </div>
            </div>




          </div>
          <div className={styles.container_right_row}>
            <div className={styles.container_right_contact_container}>
              <h5>View our services</h5>
              <div className={styles.black_button}>
                services
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
