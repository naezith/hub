import React from 'react'
import { Link } from 'react-router-dom'

import { getLevel, getChapterName } from '../../utility/ron-hub'

export const LevelLink = ({id, mastered}) => {
    let level = getLevel(id)
    return ( 
        <Link className={getChapterName(level.chapter)} to={'/level/' + id}>
            <img className='title-icon' src={'/img/icons/ch' + level.chapter + 
                            (mastered ? 'm' : '') + '.jpg'} alt={'World Records'} /> 
            { level.name }
        </Link> 
    )
}