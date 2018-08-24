import React from 'react'

import { PlayerLink } from './PlayerLink'
import { SteamProfile } from './SteamProfile'
import { DateText } from './DateText'
import { LevelLink } from './LevelLink'

import { formatDominance, formatTime, formatRank } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'

export const LeaderboardLine = ({ level_id, steam_id, steam_info, player_id, badge, rank, score, 
                username, update_date, time, 
                official_time, lb_rank, lb_size, dominance_scale='global', dominance_precision=3, // Player profile stuff
                extra_value_func, obj }) => {
        
    // Mastered if one of the variables are missing, if not, calculate
    let mastered = !(time && official_time && time > official_time)
       
    return  <tr>
    { rank &&               <td>{rank}</td> }
    { level_id &&           <td className='td-level-name'>{<LevelLink id={level_id} mastered={mastered} />}</td> }
    { player_id &&          <td><PlayerLink id={player_id} username={username} badge={badge} steam_info={steam_info} /></td>}
    { score !== undefined ? <td>{formatDominance(calcDominance(score, dominance_scale), dominance_precision)}</td> : undefined}
    { time &&               <td>{formatTime(time)}</td> }
    { official_time &&      <td className={mastered ? 'mastered' : 'not-mastered'}>{formatTime(official_time)}</td> }
    { lb_rank &&            <td>{formatRank(lb_rank, lb_size)}</td> }
    { update_date &&        <td>{<DateText date={update_date}/>}</td> }
    { extra_value_func &&   <td>{ extra_value_func(obj) }</td> }
    { steam_id &&           <td className='td-steam-icon'><SteamProfile id={steam_id} /></td> }
            </tr>
}