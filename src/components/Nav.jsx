import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import logo from './../assets/APEX LOGO-01.svg';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left_links}>
        <div className={styles.logo_container}>
            <img src={logo} alt="logo"></img>
        </div>
        <Link to="/" className={styles.link}></Link>
      </div>
      
      <div className={styles.right_links}> 
        <Link to="/services" className={styles.link}>services</Link>
        <Link to="/solutions" className={styles.link}>solutions</Link>
        <Link to="/contact" className={styles.link}>contact</Link>
      </div>
      
    </nav>
  )
}

export default Nav
