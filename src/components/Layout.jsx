import Nav from './Nav'

function Layout({ children }) {
  return (
    <div style={styles.container}>
      <header>
        <Nav />
      </header>

      <main style={styles.main}>
        {children}
      </main>

      <footer style={styles.footer}>
        <div style={styles.footer_main}>

        </div>
        &copy; {new Date().getFullYear()} Apex Graphic Solutions
      </footer>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: 1,
    padding: 0,
  },
  footer: {
    textAlign: 'center',
    padding: '15px 0',
    color: '#d4d4d4',
    borderTop: '1px solid #bdbdbd'
  },
}

export default Layout;