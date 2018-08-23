import React from 'react'

import { LeaderboardLine } from './LeaderboardLine'
import { Loading } from './Loading'

import { ifDefined } from '../../utility/common'

export const Leaderboard = ({ start_rank, lines, loading, changePage, 
            dominance_scale='global', dominance_precision=3, extra_header, extra_value_func,
            date_header='Date' }) => 
    
    loading > 0 && lines.length === 0 ? <Loading /> :
    
    <div>
        {changePage ? 
            <div>
            <button onClick={(event) => changePage(event, 'previous') } disabled={start_rank < lines.length || loading}>Previous</button>
            <button onClick={(event) => changePage(event, 'next')} disabled={loading}>Next</button> 
            </div> : undefined}
        <table>
            <thead>
                <tr>
                    { ifDefined(lines[0].rank, <th>Rank</th>) }
                    { ifDefined(lines[0].level_id, <th>Level</th>) }
                    { ifDefined(lines[0].player_id, <th>Player</th>) }
                    { ifDefined(lines[0].score, <th>Dominance</th>) }
                    { ifDefined(lines[0].time, <th>Time</th>) }
                    { ifDefined(lines[0].official_time, <th>Mastery Time</th>) }
                    { ifDefined(lines[0].lb_rank, <th>Rank</th>) }
                    { ifDefined(lines[0].update_date, <th>{date_header}</th>) }
                    { ifDefined(extra_header, <th>{extra_header}</th>) }
                    { ifDefined(lines[0].steam_id, <th>Rank</th>) }
                    { ifDefined(lines[0].rank, <th className='th-steam-icon'></th>) }
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
