import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App