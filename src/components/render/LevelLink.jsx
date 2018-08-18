import React from 'react'
import { Link } from 'react-router-dom'
import { getLevel } from '../../utility/ron-hub'

export const LevelLink = ({id}) => 
    ( <Link to={'/level/' + id}>{ getLevel(id).name }</Link> )