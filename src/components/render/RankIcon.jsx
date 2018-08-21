import React from 'react'

export const RankIcon = ({name}) => 
    <span className='tooltip'>
        <img className='rank-icon' src={'/img/ranks/' + name + '.png'} alt={name} /> 
        <span className='tooltip-text'>{name}</span>
    </span>