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
    backgroundColor: '#11544a',
    color: '#fff',
  },
}

export default Layout;