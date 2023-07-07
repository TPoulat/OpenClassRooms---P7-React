import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/About'
import Fiche from  './pages/Fiche/Fiche'
import Error from './pages/Error/Error'
import "./styles/index.scss";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Fiche/:id" element={<Fiche />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
                <Route path="/404" element={<Error />} />
            </Routes>   
            <Footer />         
        </Router>
    </React.StrictMode>,
)