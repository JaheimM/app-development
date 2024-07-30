import React from 'react'
import CardItem from './CardItem'
import img from '../assets/illustration2.png'
import './pages/Home.css'

function Cards() {
  return (
    <figure className="card">
      <div className="card-container">
        <div className="cards-wrapper">
          <ul className='cards-items'>
          <CardItem image={img} info="The world is a scary place"/>
          <CardItem image={img} info={'The world is a scary place'}/>
          </ul>
        </div>
      </div>
    </figure>
  )
}

export default Cards