import React from 'react'
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Error">Erreur404</Link>
        </nav>
    )
}

export default Header