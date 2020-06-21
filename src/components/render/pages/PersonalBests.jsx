import React from 'react'

import { formatTime, formatTimeSavings, formatDateRecent } from '../../../utility/formatters'
import { PlayerLink } from './../PlayerLink'
import { LevelLink } from './../LevelLink'
import { Tooltip } from './../Tooltip'
import { ChapterIcon } from '../ChapterIcon'
import { getChapterName } from '../../../utility/ron-hub'

export const PersonalBests = ({lines, customlevels}) => {
    if(!lines.length)
      return <div></div>

    const make_line_info = ({level_id, player_id, username, badge, steam_info, name, official_time, old_time, new_time, update_date, type}) => ({
       'Level': i => {
          const mastered = !(new_time && official_time && new_time > official_time)
          const is_chapter = type > 0
          if(is_chapter) name = getChapterName(type) + ' speedrun'
          return <td  key={i} className='td-level-name'>{ is_chapter || customlevels
              ? <div className={ customlevels ? '' : getChapterName(type)}>
                    <ul>
                        <li><ChapterIcon chapter_id={type} mastered={mastered}/></li>
                        <li><Tooltip inside={ name } popup={ customlevels ? '#' + level_id : '' }></Tooltip></li>
                    </ul>
               </div>
              : <LevelLink id={level_id} mastered={mastered} />
            }</td>
      }
      ,'Player': i => <td key={i}><PlayerLink id={player_id} username={username} badge={badge} steam_info={steam_info} /></td>
      ,'Time saved': i => (
        <td key={i} className={new_time <= official_time ? 'mastered' : ''}>
          <Tooltip inside={formatTimeSavings(old_time - new_time)} popup={ `${formatTime(old_time)} -> ${formatTime(new_time)}` } />
        </td>
        )
      ,'When': i => <td key={i}><Tooltip inside={formatDateRecent(update_date)} popup={update_date} /></td>
      })
    const lines_new = lines.map( line => ({...line,...{row: make_line_info(line)}}) )
    return (
        <div>
            <table>
                <thead>
                    <tr>{ Object.keys(lines_new[0].row).map( a => ""+a).map( (a, i) => <th key={i}>{a}</th> )}</tr>
                </thead>
                <tbody>
                   { lines_new.map( (l, i) => <tr key={i}>{ Object.entries(l.row).map( ([, handler], i) => handler(i)) }</tr> ) }
                </tbody>
            </table>
        </div>
      )
    }
