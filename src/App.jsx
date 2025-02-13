import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Slider from './components/Slider'
import Section3 from './components/Section3'

function App() {

  return (
    <>
  <Navbar />
  <Herosection />
  <Slider />
  <Section3 />

    </>
  )
}

export default App
