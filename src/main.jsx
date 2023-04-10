import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div id="main content">
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
    </div>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)