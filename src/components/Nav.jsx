import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import logoDark from './../assets/ags-logo-dark.svg'
import logoLight from './../assets/ags-logo-light.svg';

function Nav() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      setIsScrolled(currentScrollY > 0);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.nav}
        ${!showNav ? styles.hidden : ""}
        ${isScrolled ? styles.scrolled : ""}
      `}
    >
      <Link to="/" className={styles.link}>
        <div className={styles.left_links}>
          <div className={styles.logo_container}>
            <img src={isHomePage ? logoDark : logoLight} alt="logo" />
          </div>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className={styles.right_links}>
        <Link to="/work" className={styles.link}>work</Link>
        <Link to="/contact" className={styles.link}>contact</Link>
      </div>

      {/* Hamburger */}
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobile_menu} ${isOpen ? styles.show : ""}`}>
        <Link to="/work" className={styles.mobile_link} onClick={() => setIsOpen(false)}>work</Link>
        <Link to="/contact" className={styles.mobile_link} onClick={() => setIsOpen(false)}>contact</Link>
      </div>

    </nav>
  )
}

export default Nav