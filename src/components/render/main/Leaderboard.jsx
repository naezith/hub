import React from 'react'

import { LeaderboardLine } from '../LeaderboardLine'

export const Leaderboard = ({ start_rank, lines, loading, changePage, 
            dominance_scale='global', dominance_precision=3, extra_header, extra_value_func }) => 
    <div>
        <table className="Leaderboard">
            <thead>
                <tr>
                    { lines[0].rank !== undefined ? 
                        <th>#</th> : undefined }
                    { lines[0].level_id !== undefined ? 
                        <th>Level</th> : undefined }
                    { lines[0].badge !== undefined ? 
                        <th></th> : undefined }
                    { lines[0].player_id !== undefined ? 
                        <th>Player</th> : undefined }
                    { lines[0].score !== undefined ? 
                        <th>Dominance</th> : undefined }
                    { lines[0].time !== undefined ? 
                        <th>Time</th> : undefined }
                    { lines[0].official_time !== undefined ? 
                        <th>Mastery Time</th> : undefined }
                    { lines[0].lb_rank !== undefined ? 
                        <th>Rank</th> : undefined }
                    { lines[0].update_date !== undefined ? 
                        <th>Date</th> : undefined }
                    { extra_header !== undefined ? 
                        <th>{extra_header}</th> : undefined }
                    { lines[0].steam_id !== undefined ? 
                        <th></th> : undefined }
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

        {changePage ? 
            <div>
            {start_rank >= lines.length ? 
                <button onClick={(event) => changePage(event, 'previous') } disabled={loading}>Previous</button> : undefined}
            <button onClick={(event) => changePage(event, 'next')} disabled={loading}>Next</button> 
            </div> : undefined}
    </div>
