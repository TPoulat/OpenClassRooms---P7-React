import React from 'react'
import PropTypes from 'prop-types'
 
function Banner({image}) {
  const bannerTitle = "Chez vous, partout et ailleurs";

    return (
        <div className='banner'>
            <img className='banner_img' alt="Image de la bannière" src={image} />
            <h1 className='banner_text'>{bannerTitle}</h1>
         </div>
      )
    }

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  
}

Banner.defaultProps = {
    title: 'Chez vous, partout et ailleurs'
}

export default Banner