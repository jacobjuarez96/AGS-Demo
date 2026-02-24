import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styles from './Nav.module.css'
import logoDark from './../assets/ags-logo-dark.svg'
import logoLight from './../assets/ags-logo-light.svg';

function Nav() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link} onClick={closeMenu}>
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
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobile_menu} ${isOpen ? styles.show : ""}`}>
        <Link to="/work" className={styles.mobile_link} onClick={closeMenu}>work</Link>
        <Link to="/contact" className={styles.mobile_link} onClick={closeMenu}>contact</Link>
      </div>
    </nav>
  )
}

export default Nav