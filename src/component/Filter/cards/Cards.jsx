import React from 'react'
import "./Cards.scss";


const Cards = ({ arr }) => {
    console.log(arr)

    const displayCards = arr.map(beer => {
        <div className='card'>
            <h2 className="card_name">{beer.name}</h2>
            <p className='card__ABV'>{beer.abv}</p>
            <p className='card__Brewed'>{beer.first_brewed}</p>
            <p className='card__PH'>{beer.ph}</p>
            <p className='card__description'>{beer.description}</p>
        </div>
    })


  return (
    <div>{displayCards}</div>
  )
}

export default Cards