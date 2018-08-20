import React from 'react'

export const CountryIcon = ({name, url}) => 
    <span className='tooltip'>
        <img className='country-icon' src={url} alt={name} /> 
        <span className='tooltip-text'>{name}</span>
    </span>