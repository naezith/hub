import React from 'react'

import { Tooltip } from './Tooltip'

export const RankIcon = ({name}) => 
    <Tooltip inside={<img className='rank-icon' src={'/img/ranks/' + name + '.png'} alt={name} />} popup={name}/>