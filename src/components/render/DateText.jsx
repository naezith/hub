import React from 'react'

import { prettifyDate, formatDate  } from '../../utility/formatters'

export const DateText = ({date}) => 
    date ? ( <span title={prettifyDate(date)}>{formatDate(date)}</span> ) : undefined