import React from 'react'
import '../Styles/Row.css'
import Card from '../Components/Card';

const Row = ({ tittle, arr = [] }) => {

  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <h2 className="row_heading">{tittle}</h2>
      <div className="row">

        {arr.map((item, index) => (

          <Card key={index} image={`${imgUrl}/${item.poster_path}`} />

        ))}

      </div>
    </>
  )
}

export default Row