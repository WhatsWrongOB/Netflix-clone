import React from 'react'
import '../Styles/Row.css'

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="card_img" />
    </div>

  )
}

export default Card