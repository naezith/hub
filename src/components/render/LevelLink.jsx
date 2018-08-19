import React from 'react'
import { getLevel, getChapterName } from '../../utility/ron-hub'

import '../../css/LevelLink.css'

export const LevelLink = ({id}) => {
    let level = getLevel(id)
    return ( <a className={getChapterName(level.chapter)} href={'/level/' + id}>{ level.name }</a> )
}