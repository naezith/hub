import React from 'react'

import { steamProfile } from '../utility/common'

export default ({id, inside}) => 
    ( <a href={steamProfile(id)} target='_blank' rel='noopener noreferrer'>{inside}</a> )