import React from 'react'

import { Tooltip } from './Tooltip'

import { prettifyDate, formatDate  } from '../../utility/formatters'

export const DateText = ({date}) => <Tooltip inside={formatDate(date)} popup={prettifyDate(date)}/>