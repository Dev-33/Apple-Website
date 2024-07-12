import { useState } from 'react'
import Navbar from "./assets/Components/Navbar"
import './App.css'
import Footer from './assets/Components/Footer'
import Highlight from "./assets/Components/Highlight"
import Puzzle from './assets/Components/Puzzle'
import Macbook from './assets/Components/Macbook'
import Main from "./assets/Components/Main"
function App() {

  return (
    <>
    <Navbar/>
     <Main/>
    <Puzzle/>
    <Highlight/>
    <Macbook/>
    <Footer/>
    </>
  )
}

export default App
