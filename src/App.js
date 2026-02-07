// import React from 'react';

// function App() {
//   const value = 'World';
//   return <div>Hello bitches{value}</div>;
// }

// export default App;

import { Routes, Route } from 'react-router-dom'
import Layout from './../src/components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App