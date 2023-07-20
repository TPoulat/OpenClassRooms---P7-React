import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/index.scss";
import Home from './pages/Home/'
import About from './pages/About/About'
import Logement from  './pages/Logement/Logement'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
                <Route path="/404" element={<Error />} />
            </Routes>   
            <Footer />         
        </Router>
    </React.StrictMode>,
)