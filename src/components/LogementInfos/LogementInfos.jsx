import React from "react";
import Rating from "../Rating/Rating";
import PropTypes from 'prop-types'


function LogementInfos({ title, location, tags, host, rating }) {

  return (
      <article className='logementinfos'>
          <section className='logementinfos_info'>
              <h1 className='logementinfos_info_title'>{title}</h1>
              <h2 className='logementinfos_info_location'>{location}</h2>
              <div className='logementinfos_info_tags'>
                {tags.map((tag) => (<span className='logementinfos_info_tags_tag' key={tag}>{tag}</span>))}
              </div>
          </section>
          <section className='logementinfos_rates'>
              <div className='logementinfos_rates_host'>
                  <h2 className='logementinfos_rates_host_name' >{host.name}</h2>
                  <img className='logementinfos_rates_host_picture' src={host.picture} alt='host'/>
              </div>
              <Rating rating={rating} />
          </section>

      </article>
  );
}

LogementInfos.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.string,
    host: PropTypes.string,
    rating : PropTypes.string,    
  }

export default LogementInfos