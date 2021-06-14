import React from 'react';

import './card.css'

export const Card = (props) => (

    <div className="single-card">
       <img alt="products" src={`https://robohash.org/${props.product.id}?set=set2&size=180x180`} /> 
       <h1>{props.product.name}</h1>
        <p>{props.product.email}</p>
    </div> 

);