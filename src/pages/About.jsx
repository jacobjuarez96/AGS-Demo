import styles from "./About.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import aboutHero from "../assets/closing-images/closer_2.webp";
import aboutImage1 from "../assets/highlight1.webp";
import aboutImage2 from "../assets/highlight3.webp";
import aboutImage3 from "../assets/closing-images/closer_1.webp";

function About() {
  const sectionRefs = useRef([]);
  const [openItem, setOpenItem] = useState(0);

  const values = [
    {
      title: "Precision",
      body:
        "Every installation is approached with care, clean execution, and close attention to alignment, finish, and visual consistency. We believe the final details are what make a project feel premium."
    },
    {
      title: "Reliability",
      body:
        "We show up prepared, communicate clearly, and respect deadlines. Whether it’s a storefront refresh or a large commercial rollout, clients can count on steady, professional execution."
    },
    {
      title: "Communication",
      body:
        "A smooth install starts before the first panel goes up. We keep expectations clear, coordinate logistics, and stay responsive throughout the process so projects move forward without confusion."
    },
    {
      title: "Craftsmanship",
      body:
        "From privacy film and wall murals to dimensional branding and specialty graphics, we care about quality at every stage. The goal is work that looks intentional, polished, and built to last."
    }
  ];

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((el) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.revealVisible);
            observer.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const setSectionRef = (el, index) => {
    sectionRefs.current[index] = el;
  };

  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src={aboutHero} alt="Apex Graphic Solutions installation" />
        </div>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About Apex Graphic Solutions</p>
          {/* <h1>
            Clean installs.
            <br />
            Thoughtful execution.
            <br />
            Built around trust.
          </h1> */}
          <p className={styles.heroText}>
            We help businesses transform spaces through professional graphic
            installation, combining precision, communication, and dependable
            craftsmanship across every project.
          </p>
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 0)}
        className={`${styles.introGrid} ${styles.reveal}`}
      >
        <div className={styles.gridLabel}>
          <p>Who we are</p>
        </div>

        <div className={styles.gridContent}>
          <h2>
            Apex Graphic Solutions partners with businesses to install branded
            environments that feel intentional, polished, and built to last.
          </h2>
          <p>
            From storefront graphics and privacy film to wall murals, ADA signage, and specialty vinyl applications, our work is rooted in precision and presentation. 
            <br></br><br></br>
            With <span>12 years of experience in the graphics and installation industry</span>, we understand that the details matter.
We care about how a space looks when the job is finished — but also how the process feels while getting there.
Our approach is straightforward: communicate clearly, execute cleanly, and treat every project with the same level of care we’d expect ourselves.
          </p>
          <p>
            Our approach is straightforward: communicate clearly, execute
            cleanly, and treat every project with the same level of care we’d
            expect ourselves.
          </p>
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 1)}
        className={`${styles.metricsSection} ${styles.reveal}`}
      >
        <div className={styles.metricsTop}>
          <div className={styles.metricsIntro}>
            <h2>The work behind the finish.</h2>
            <p>
              We focus on the details that make graphics feel seamless in the
              real world.
            </p>
          </div>

          <div className={styles.metricsList}>
            <div className={styles.metricCard}>
              <span>01</span>
              <h3>Commercial installs</h3>
            </div>
            <div className={styles.metricCard}>
              <span>02</span>
              <h3>Storefront graphics</h3>
            </div>
            <div className={styles.metricCard}>
              <span>03</span>
              <h3>Interior branding</h3>
            </div>
            <div className={styles.metricCard}>
              <span>04</span>
              <h3>Regional service</h3>
            </div>
          </div>
        </div>

        <div className={styles.backgroundNumber}>01</div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 2)}
        className={`${styles.imageStatement} ${styles.reveal}`}
      >
        <div className={styles.statementLeft}>
          <div className={styles.statementImage}>
            <img src={aboutImage1} alt="Installed privacy graphics" />
          </div>
        </div>

        <div className={styles.statementRight}>
          <p className={styles.smallLabel}>Our approach</p>
          <h2>
            We believe great installation work should feel effortless when it’s
            complete.
          </h2>
          <p>
            That means sharp alignment, clean trimming, thoughtful placement,
            and a finished result that supports the brand instead of distracting
            from it.
          </p>
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 3)}
        className={`${styles.valuesSection} ${styles.reveal}`}
      >
        <div className={styles.valuesIntro}>
          <h2>
            The values and standards that shape how we work.
          </h2>
        </div>

        <div className={styles.valuesAccordion}>
          {values.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div key={item.title} className={styles.accordionItem}>
                <button
                  className={styles.accordionTrigger}
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>
                  <span className={styles.plus}>{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`${styles.accordionContent} ${
                    isOpen ? styles.accordionContentOpen : ""
                  }`}
                >
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 4)}
        className={`${styles.quoteSection} ${styles.reveal}`}
      >
        <div className={styles.quoteEmpty}></div>

        <div className={styles.quoteContent}>
          <p className={styles.quoteMark}>“</p>
          <blockquote>
            A strong installation is more than applying graphics — it’s knowing
            how to make the finished space feel clean, intentional, and ready to
            represent the brand.
          </blockquote>
          <p className={styles.quoteAuthor}>— Apex Graphic Solutions</p>
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 5)}
        className={`${styles.gallerySection} ${styles.reveal}`}
      >
        <div className={styles.galleryCard}>
          <img src={aboutImage2} alt="Interior graphics installation" />
        </div>
        <div className={styles.galleryCard}>
          <img src={aboutImage3} alt="Professional installation detail" />
        </div>
      </section>

      <section
        ref={(el) => setSectionRef(el, 6)}
        className={`${styles.ctaSection} ${styles.reveal}`}
      >
        <div className={styles.ctaLeft}>
          <h2>Let’s build something that looks as good as it performs.</h2>
        </div>

        <div className={styles.ctaRight}>
          <p>
            Whether you’re launching a new space or updating an existing one,
            we’re ready to help bring the graphics side of the project together.
          </p>

          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Contact us
            </Link>
            <Link to="/work" className={styles.secondaryButton}>
              View our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;