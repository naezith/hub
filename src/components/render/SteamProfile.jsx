import React from 'react'

import { getSteamURL } from '../../utility/common'

import '../../css/SteamProfile.css'

export const SteamProfile = ({id}) => 
    <a href={getSteamURL(id)} target='_blank' rel='noopener noreferrer'>
        <img className='steam-icon' src={require('../../img/steam/steam-icon.png')} title={'Steam Profile'} alt={'Steam Profile'} />
    </a> 
