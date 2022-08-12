import React from "react"
import About from "./components/About"
import Admin from "./components/Admin"
import Galery from "./components/Galery"
import Home from "./components/Home"
import Kegiatan from "./components/Kegiatan"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App scroll-smooth">
      <Navbar/>
      <Home/>
      <About/>
      <Kegiatan/>
      <Galery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
