import React from 'react'

export const CountryIcon = ({name, url}) => 
    ( <img className='country-icon' src={url} title={name} alt={name} /> )