import React from 'react'

export const Tooltip = ({inside, popup}) => 
    <span className='tooltip'>
        {inside}
        <span className='tooltip-text'>{popup}</span>
    </span>