import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import image_1 from "../assets/highlight1.webp";
import image_2 from "../assets/highlight2.webp";
import image_3 from "../assets/highlight3.webp";
import image_4 from "../assets/highlight4.webp";

import client_logo_1 from "../assets/client-logos/academy-logo.svg";
import client_logo_2 from "../assets/client-logos/in-n-out-logo.svg";
import client_logo_3 from "../assets/client-logos/amazon-logo.svg";
import client_logo_4 from "../assets/client-logos/ut-logo.svg";
import client_logo_5 from "../assets/client-logos/sprint-logo.svg";
import client_logo_6 from "../assets/client-logos/google-logo.svg";

import closer_1 from "../assets/closing-images/closer_1.webp";
import closer_2 from "../assets/closing-images/closer_2.webp";
import closer_3 from "../assets/closing-images/closer_3.webp";
import closer_4 from "../assets/closing-images/closer_4.webp";

/* mission carousel images */
import mission_1 from "../assets/gallery-resized/privacy1.webp";
import mission_2 from "../assets/hero_image.webp";
import mission_3 from "../assets/gallery-resized/vinyl4.webp";
import mission_4 from "../assets/gallery-resized/vinyl1.webp";
import mission_5 from "../assets/gallery-resized/lettering8.webp";

function Home() {
  const missionRef = useRef(null);

  const services = [
    { title: "privacy windows", image: mission_1, alt: "privacy windows installation" },
    { title: "custom designs", image: mission_2, alt: "custom design graphics" },
    { title: "wall murals", image: mission_3, alt: "wall mural installation" },
    { title: "vinyl", image: mission_4, alt: "vinyl graphics" },
    { title: "ada signage", image: mission_5, alt: "ada signage" },
    // { title: "wall paper", image: mission_6, alt: "wall paper installation" },
  ];

  const [selectedService, setSelectedService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [pauseCarousel, setPauseCarousel] = useState(false);

  const activeService = hoveredService !== null ? hoveredService : selectedService;

  useEffect(() => {
    const el = missionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.reveal_visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pauseCarousel) return;

    const interval = setInterval(() => {
      setSelectedService((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pauseCarousel, services.length]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={`${styles.action_text} ${styles.fade_up}`}>
            <h1>
              Aligning vision <br />
              and action
            </h1>
          </div>

          <Link
            to="/contact"
            className={`${styles.action_button} ${styles.fade_up_delayed}`}
          >
            <p>reach out to our team</p>
          </Link>
        </div>
      </section>

      <section
        ref={missionRef}
        className={`${styles.mission} ${styles.reveal}`}
      >
        <div className={styles.mission_statement}>
          <h2>
            At Apex Graphic Solutions, we transform spaces with precision and
            style. Our expert team brings your vision to life through
            professional <span>graphic installation</span>, from bold signage to
            immersive visuals. With innovative techniques and meticulous
            attention to detail, every project stands out.
          </h2>
        </div>

        <div className={styles.vertical_divider}></div>

        <div className={styles.service_overview}>
          <ul className={styles.service_list}>
            {services.map((service, index) => (
              <li key={service.title}>
                <button
                  type="button"
                  onMouseEnter={() => {
                    setHoveredService(index);
                    setPauseCarousel(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredService(null);
                    setPauseCarousel(false);
                  }}
                  onClick={() => setSelectedService(index)}
                  className={`${styles.service_button} ${activeService === index ? styles.service_button_active : ""
                    }`}
                >
                  <h3>{service.title}</h3>
                </button>
              </li>
            ))}
          </ul>

          <div
            className={styles.mission_carousel}
            onMouseEnter={() => setPauseCarousel(true)}
            onMouseLeave={() => setPauseCarousel(false)}
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setSelectedService(index)}
                className={`${styles.mission_thumb} ${activeService === index ? styles.mission_thumb_active : ""
                  }`}
                aria-label={`Select ${service.title}`}
              >
                <img src={service.image} alt={service.alt} />
              </button>
            ))}
          </div>
        </div>
      </section>

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
                  <img src={image_1} alt="privacy window" />
                </div>
                <p>privacy windows</p>
              </div>
              <div className={styles.highlights_content}>
                <div className={styles.highlight_image_2}>
                  <img src={image_2} alt="academy content" />
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
                  <img src={image_3} alt="football frame" />
                </div>
                <p>back-lit fabric frames</p>

                <div className={styles.highlight_comment}>
                  <h2>
                    <span>5-Star</span> Installation Experience
                  </h2>
                </div>
              </div>

              <div className={styles.highlights_content}>
                <div className={styles.highlight_image_4}>
                  <img src={image_4} alt="ut stadium" />
                </div>
                <p>Academy Sports Wall Interior 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.view_work_container}>
        <div className={styles.view_work_wrapper}>
          <div className={styles.view_work_content_container}>
            <h2>View our work</h2>
          </div>
          <div className={styles.view_work_content_container}>
            <p>Discover the results of our collaborations</p>
          </div>
          <div className={styles.view_work_content_container}>
            <Link to="/work" className={styles.black_button}>
              view our portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.view_clients_container}>
        <h2>A sample of our clients</h2>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_1} alt="academy logo" />
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_2} alt="in-n-out logo" />
            </div>
          </div>
        </div>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_3} alt="amazon logo" />
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_4} alt="ut logo" />
            </div>
          </div>
        </div>

        <div className={styles.view_clients_wrapper}>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_5} alt="sprint logo" />
            </div>
          </div>
          <div className={styles.view_work_content_container}>
            <div className={styles.client_container}>
              <img src={client_logo_6} alt="google logo" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hero_closing_container}>
        <div className={styles.closing_container_left}>
          <div className={styles.closing_images_container}>
            <div className={styles.closing_images_row}>
              <div className={styles.closing_image}>
                <img src={closer_1} alt="hr block" />
              </div>
              <div className={styles.closing_image}>
                <img src={closer_2} alt="installer" />
              </div>
            </div>
            <div className={styles.closing_images_row}>
              <div className={styles.closing_image}>
                <img src={closer_3} alt="college" />
              </div>
              <div className={styles.closing_image}>
                <img src={closer_4} alt="hr block" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.closing_container_right}>
          <div className={styles.container_right_row}>
            <div className={styles.right_row_wrapper}>
              <h2>
                Graphic Installation <br />
                Near You
              </h2>
            </div>
          </div>

          <div className={styles.container_right_row}>
            <div className={styles.right_row_wrapper}>
              <p>
                Based in Middle Tennessee, Apex Graphic Solutions proudly serves
                businesses throughout the surrounding areas with reliable,
                high-quality graphic installation services. From local
                storefronts to large-scale commercial projects, we bring
                consistency, craftsmanship, and clear communication to every job.
                Whether you’re refreshing a brand or launching something new,
                our team is nearby, ready to deliver results you can trust—on
                time and done right.
              </p>
            </div>
          </div>

          <div className={styles.container_right_row}>
            <div className={styles.container_right_contact_container}>
              <h5>Reach out to us</h5>
              <Link to="/contact" className={styles.black_button}>
                contact
              </Link>
            </div>
          </div>

          <div className={styles.container_right_row}>
            <div className={styles.container_right_contact_container}>
              <h5>View our services</h5>
              <Link to="/services" className={styles.black_button}>
                services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;