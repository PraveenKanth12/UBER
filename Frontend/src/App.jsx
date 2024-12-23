import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './Pages/Start';
import Userlogin from './Pages/Userlogin';
import UserSignup from './Pages/UserSignup';
import Captainlogin from './Pages/Captainlogin';
import CaptainSignup from './Pages/CaptainSignup';
import Home from './Pages/Home';
import UserProtectedWrapper from './Pages/UserProtectedWrapper';
import UserLogout from './Pages/UserLogout';
import CaptainHome from './Pages/CaptainHome';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/login" element={<Userlogin/>}/>
      <Route path="/signup" element={<UserSignup/>}/>
      <Route path="/captain-login" element={<Captainlogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignup/>}/>
      <Route path="/home" element={<UserProtectedWrapper>
        <Home/>
      </UserProtectedWrapper>}/>
      <Route path='/logout' element={<UserProtectedWrapper>
      <UserLogout/>
    </UserProtectedWrapper>}/>
    <Route path='/captain-home' element={<CaptainHome/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
