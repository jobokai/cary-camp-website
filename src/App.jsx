import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import './styles/main.scss'

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
      </Routes>
    </Router>
  )
}

export default App
