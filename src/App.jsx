import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
   <div>
   <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <Footer />
   </div>
   <Toaster />
    
    </>
  )
}

export default App