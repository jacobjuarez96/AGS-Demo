import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactPage}>
      
      <div className={styles.contactLeft}>
        <h1>Contact</h1>
        <p>Our solutions are designed to help businesses communicate clearly, stand out visually, and maintain consistency across every surface and location.</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          
        </div>

        <a
          href="mailto:apexgraphicsolutions.contact@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.contactCard}
        >
          <h3>Projects & Estimates & Inquiries</h3>
          <span className={styles.contactLink}>apexgraphicsolutions.contact@gmail.com</span>
          <span className={styles.arrow}>→</span>

        </a>


        <a
          href="https://instagram.com/apexgraphicsolutions"
          target="_blank"
          rel="noreferrer"
          className={styles.contactCard}
        >
          <h3>Instagram</h3>
          <span className={styles.contactLink}>@apexgraphicsolutions</span>
          <span className={styles.arrow}>→</span>
        </a>

      </div>
    </section>
  );
}
