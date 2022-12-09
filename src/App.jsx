import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import 'boxicons'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Cv from './components/Cv';
import 'bootswatch/dist/slate/bootstrap.min.css';








function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/cv' element={<Cv />} />


      </Routes>





    </HashRouter>

  )
}

export default App
