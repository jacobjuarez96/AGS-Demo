import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import logo from './../assets/ags-logo-black.svg';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        <div className={styles.left_links}>
          <div className={styles.logo_container}>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </Link>
      
      <div className={styles.right_links}> 
        <Link to="/solutions" className={styles.link}>solutions</Link>
        <Link to="/services" className={styles.link}>services</Link>
        <Link to="/work" className={styles.link}>work</Link>
        <Link to="/contact" className={styles.link}>contact</Link>
      </div>
      
    </nav>
  )
}

export default Nav
