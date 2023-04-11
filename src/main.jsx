import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css'
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div id="container">
      <div id="navbar">
        <Link to="/">Home Page</Link>
        <Link to="/players/:id">Single Player</Link>
      </div>
    <div id="main-section">
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
    </div>
    </div>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)