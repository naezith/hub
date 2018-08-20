import React from 'react'

import '../../css/CountryIcon.css'

export const CountryIcon = ({name, url}) => 
    ( <img className='country-icon' src={url} title={name} alt={name} /> )