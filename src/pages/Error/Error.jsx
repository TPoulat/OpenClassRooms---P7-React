import React from 'react'
import { Link } from "react-router-dom"


function Error () {

    const TextError= "Oups! La page que vous demandez n'existe pas. "
    
    return (

        <div>
            <h1 className='error_title'> 404 </h1>
            <p className='error_text'>{TextError}</p>
            <Link className='error_link' to="/">
            Retourner sur la page d’accueil
        </Link>
        </div>
    )
}

export default Error