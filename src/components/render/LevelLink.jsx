import React from 'react'
import { Link } from 'react-router-dom'

import { getLevel, getChapterName } from '../../utility/ron-hub'

export const LevelLink = ({id}) => {
    let level = getLevel(id)
    return ( <Link className={getChapterName(level.chapter)} to={'/level/' + id}>{ level.name }</Link> )
}