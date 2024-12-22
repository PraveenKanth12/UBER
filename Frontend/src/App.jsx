import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Userlogin from './Pages/Userlogin';
import UserSignup from './Pages/UserSignup';
import Captainlogin from './Pages/Captainlogin';
import CaptainSignup from './Pages/CaptainSignup';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Userlogin/>}/>
      <Route path="/signup" element={<UserSignup/>}/>
      <Route path="/captain-login" element={<Captainlogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
