import './styles/main.scss'
import './fontawesome.js'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Home from './pages/Home'
import TradingPost from './pages/TradingPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        {/* Facility sub-pages can be added later */}
        <Route path="/facilities/campsites" element={<Facilities />} />
        <Route path="/facilities/cabins" element={<Facilities />} />
        <Route path="/facilities/shelters" element={<Facilities />} />
        <Route path="/facilities/recreational" element={<Facilities />} />
        <Route path="/weddings" element={<Contact />} />
        <Route path="/policies" element={<Contact />} />
        <Route path="/trading-post" element={<TradingPost />} />
      </Routes>
    </Router>
  )
}

export default App
