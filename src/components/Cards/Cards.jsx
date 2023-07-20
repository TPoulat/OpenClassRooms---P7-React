import React from "react";
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


function Card({id, title, cover}) {
    return (
        <Link className="card" to={`/logement/${id}`}>
            <img className="card_img" src={cover} alt="cover logement"/>
            <h2 className="card_title">{title}</h2>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover : PropTypes.string,    
  }

export default Card