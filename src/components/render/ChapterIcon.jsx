import React from 'react'
import { getChapterName } from '../../utility/ron-hub';

import { Tooltip } from './Tooltip'

export const ChapterIcon = ({chapter_id, mastered}) => {
    const chapter_name = getChapterName(chapter_id)
    
    return  <Tooltip inside={<img className='title-icon' src={'/img/icons/ch' + chapter_id + 
                        (mastered === undefined || mastered ? 'm' : '') + '.jpg'} alt={chapter_name} />} 
                     popup={chapter_name}/>
}