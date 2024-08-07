import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plugins from './components/Plugins.jsx'
import Themes from './components/Themes.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Signup from './components/Signup.jsx'

export default function App() {
  return <>
    <Router>
      <div className=''>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/plugins' element={<Plugins/>}/>
          <Route path='/themes' element={<Themes/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  </>
}