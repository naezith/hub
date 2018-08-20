import React from 'react'

export const RankIcon = ({name}) => 
    ( <img className='rank-icon' src={require('../../img/ranks/' + name + '.png')} title={name} alt={name} /> )