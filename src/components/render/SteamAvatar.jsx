import React from 'react'

import '../../css/SteamAvatar.css'

export const SteamAvatar = ({name, url}) => 
    ( <img className='steam-avatar' src={url} title={name} alt={name} /> )