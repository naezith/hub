import React from 'react'

export const SteamAvatar = ({name, url}) => 
    <img className='steam-avatar' src={url} title={name} alt={name} /> 