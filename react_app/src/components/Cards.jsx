import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <figure className="card">
      <div className="card-container">
        <div className="cards-wrapper">
          <ul className='cards-items'>
            <CardItem />
            <CardItem />
            <CardItem />
          </ul>
        </div>
      </div>
    </figure>
  )
}

export default Cards