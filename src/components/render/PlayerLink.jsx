import React from 'react'
import { Link } from 'react-router-dom'

export const PlayerLink = ({id, username}) => 
    ( <Link to={'/player/' + id}>{ username }</Link> )