import React from 'react'

import { Tooltip } from './Tooltip'

export const CountryIcon = ({name, url}) => 
    <Tooltip inside={<img className='country-icon' src={url} alt={name} />} popup={name}/>