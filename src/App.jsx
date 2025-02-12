import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Slider from './components/Slider'

function App() {

  return (
    <>
  <Navbar />
  <Herosection />
  <Slider />
    </>
  )
}

export default App
