import React from 'react'

import { LeaderboardLine } from './LeaderboardLine'
import { Loading } from './Loading'

export const Leaderboard = ({ start_rank, lines, loading, changePage, 
            dominance_scale='global', dominance_precision=3, extra_header, extra_value_func,
            date_header='Date' }) => 
    
    loading > 0 && lines.length === 0 ? <Loading /> :
    
    <div>
        { changePage && 
            <div>
            <button onClick={(event) => changePage(event, 'previous') } disabled={start_rank < lines.length || loading}>Previous</button>
            <button onClick={(event) => changePage(event, 'next')} disabled={loading}>Next</button> 
            </div> }
        <table>
            <thead>
                <tr>
                    { lines[0].rank &&                  <th>Rank</th> }
                    { lines[0].level_id &&              <th>Level</th> }
                    { lines[0].player_id &&             <th>Player</th> }
                    { lines[0].score !== undefined ?    <th>Dominance</th> : undefined}
                    { lines[0].time &&                  <th>Time</th> }
                    { lines[0].official_time &&         <th>Mastery Time</th> }
                    { lines[0].lb_rank &&               <th>Rank</th> }
                    { lines[0].update_date &&           <th>{date_header}</th> }
                    { extra_header &&                   <th>{extra_header}</th> }
                    { lines[0].steam_id &&              <th className='th-steam-icon'></th> }
                </tr>
            </thead>
            <tbody>
            { lines.map((l, i) => <LeaderboardLine key={i} {...l} 
                                    dominance_scale={dominance_scale} 
                                    dominance_precision={dominance_precision} 
                                    obj={l} 
                                    extra_value_func={extra_value_func} />) }
            </tbody>
        </table>
    </div>
