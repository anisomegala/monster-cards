import React from 'react';
import './card-list.css'

import { Card } from '../cards/card.jsx';

export const CardList = function(props) {
    return   <div className='card-list'>
                { props.products.map(product => (
                <Card key={product.id} product={product}/>
                ))}   
            </div>
};