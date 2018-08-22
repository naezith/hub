import React from 'react'
import { getChapterName } from '../../utility/ron-hub';

export const ChapterIcon = ({chapter_id, mastered}) => {
    const chapter_name = getChapterName(chapter_id)
    
    return  (
        <span className='tooltip'>
            <img className='title-icon' src={'/img/icons/ch' + chapter_id + 
                    (mastered === undefined || mastered ? 'm' : '') + '.jpg'} alt={chapter_name} /> 
            <span className='tooltip-text'>{chapter_name}</span>
        </span>
    )
}