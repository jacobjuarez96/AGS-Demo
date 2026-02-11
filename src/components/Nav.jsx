import { Link, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'
import logoDark from './../assets/ags-logo-dark.svg'
import logoLight from './../assets/ags-logo-light.svg';


function Nav() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        <div className={styles.left_links}>
          <div className={styles.logo_container}>
            <img src={isHomePage ? logoDark: logoLight} alt="logo"></img>
          </div>
        </div>
      </Link>
      
      <div className={styles.right_links}> 
        {/* <Link to="/solutions" className={styles.link}>solutions</Link> */}
        {/* <Link to="/services" className={styles.link}>services</Link> */}
        <Link to="/work" className={styles.link}>work</Link>
        <Link to="/contact" className={styles.link}>contact</Link>
      </div>
      
    </nav>
  )
}

export default Nav
