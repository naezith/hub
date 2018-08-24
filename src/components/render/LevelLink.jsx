import React from 'react'
import { Link } from 'react-router-dom'

import { ChapterIcon } from './ChapterIcon'
import { getLevel, getChapterName } from '../../utility/ron-hub'

export const LevelLink = ({id, mastered}) => {
    let level = getLevel(id)
    
    return <Link className={getChapterName(level.chapter)} to={'/level/' + id}>
                <ul>
                    <li><ChapterIcon chapter_id={level.chapter} mastered={mastered}/></li>
                    <li>{ level.name }</li>
                </ul>
           </Link> 
}