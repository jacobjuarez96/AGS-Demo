import { Routes, Route } from 'react-router-dom'
import Layout from './../src/components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Solutions from './pages/Solutions'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </Layout>
  )
}

export default App;