import React from 'react'

import { prettifyDate, formatDate  } from '../../utility/formatters'

export const DateText = ({date}) => 
    <span className='tooltip'>
        {formatDate(date)}
        <span className='tooltip-text'>{prettifyDate(date)}</span>
    </span>