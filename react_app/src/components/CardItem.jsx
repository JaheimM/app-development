import React from 'react'

// going to have props 
function CardItem(props) {
  return (
    <> 
    <figure className="cards-item">
        <link className='card_item_link'>
        <img src={props.image} alt={props.alt} className='cards-item-img'/>
        </link>
    </figure>
    <div className="card-item-info">
        <h3 className='card-item-title'>Title</h3>
        <p>{props.info}</p>
    </div>
    </>
   
  )
}

export default CardItem