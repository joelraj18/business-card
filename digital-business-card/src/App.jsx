import React from 'react'
import './App.css'

import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <main>
      <div classsName = "card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </main>
  )
}

export default App

