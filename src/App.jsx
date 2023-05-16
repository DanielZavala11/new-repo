import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Jobs from './pages/Jobs'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Data from './pages/Data'
import InitialPage from './pages/InitialPage'
import Rooms from './pages/Rooms'
import Light from './pages/Light'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/initial"  element={<InitialPage />}/>
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/light" element={<Light />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/initial" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
