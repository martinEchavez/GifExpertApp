import React from 'react'
import PropTypes from 'prop-types'

const GifGidItems = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGidItems

GifGidItems.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}