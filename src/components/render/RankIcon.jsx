import React from 'react'

import '../../css/RankIcon.css'

export const RankIcon = ({name}) => 
    ( <img className='rank-icon' src={require('../../img/ranks/' + name + '.png')} title={name} alt={name} /> )