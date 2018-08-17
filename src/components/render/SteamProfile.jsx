import React from 'react'

import { getSteamURL } from '../../utility/common'

export const SteamProfile = ({id, inside}) => 
    ( <a href={getSteamURL(id)} target='_blank' rel='noopener noreferrer'>{inside}</a> )