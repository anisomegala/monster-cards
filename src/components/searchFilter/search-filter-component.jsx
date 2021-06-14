import React from 'react';

import './searchFilter.css';


export const SearchFilter = ({ placeholder, handle}) => {

    return  <input
                className="inputSearch"
                type="search"
                placeholder={placeholder}
                onChange={handle}
               />
};