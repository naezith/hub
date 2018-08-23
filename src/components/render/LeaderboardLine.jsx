import React from 'react'

import { PlayerLink } from './PlayerLink'
import { SteamProfile } from './SteamProfile'
import { DateText } from './DateText'
import { LevelLink } from './LevelLink'

import { formatDominance, formatTime, formatRank } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ifDefined } from '../../utility/common'

export const LeaderboardLine = ({ level_id, steam_id, steam_info, player_id, badge, rank, score, 
                username, update_date, time, 
                official_time, lb_rank, lb_size, dominance_scale='global', dominance_precision=3, // Player profile stuff
                extra_value_func, obj }) => {
        
    // Mastered if one of the variables are missing, if not, calculate
    let mastered = !(time && official_time && time > official_time)
      
    return  <tr>
                { ifDefined(rank, <td>{rank}</td>) } 
                { ifDefined(level_id, <td className='td-level-name'>{<LevelLink id={level_id} mastered={mastered} />}</td>) } 
                { ifDefined(player_id, <td><PlayerLink id={player_id} username={username} badge={badge} steam_info={steam_info} /></td>) } 
                { ifDefined(score, <td>{formatDominance(calcDominance(score, dominance_scale), dominance_precision)}</td>) } 
                { ifDefined(time, <td>{formatTime(time)}</td>) } 
                { ifDefined(official_time,<td className={mastered ? 'mastered' : 'not-mastered'}>{formatTime(official_time)}</td>) } 
                { ifDefined(lb_rank, <td>{formatRank(lb_rank, lb_size)}</td>) } 
                { ifDefined(update_date, <td>{<DateText date={update_date}/>}</td>) } 
                { extra_value_func === undefined ? undefined : <td>{ extra_value_func(obj) }</td> }
                { ifDefined(steam_id, <td className='td-steam-icon'><SteamProfile id={steam_id} /></td>) } 
            </tr>
}