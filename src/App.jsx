import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import UploadImgPg from './Pages/UploadImgPg.jsx'
import ShowcasePg from './Pages/ShowcasePg.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <UploadImgPg/>
      <ShowcasePg/>
    </>
  )
}

export default App