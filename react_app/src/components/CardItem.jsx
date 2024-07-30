import React from 'react'
import "./pages/Home.css"

// going to have props 
function CardItem(props) {
  return (
    <> 
    <figure className="card-item">
        <a className='card_item_link'>
        <img src={props.image} alt={props.alt} className='cards-item-img'/>
        </a>
    
    <div className="card-item-info">
        <h3 className='card-item-title'>Title</h3>
        <p>{props.info}</p>
    </div>
    </figure>
    </>
   
  )
}

export default CardItem