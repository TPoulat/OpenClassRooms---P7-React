import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../assets/img/banner.png"

 
function Banner() {
    return (
        <div className='banner'>
          <Link to="/">
            <img className='banner_logo' alt="HomeLogo" src={banner} />
          </Link>
         </div>
      )
    }

export default Banner