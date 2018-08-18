import React from 'react'

import { LeaderboardLine } from '../LeaderboardLine'

export const Leaderboard = ({ start_rank, lines, loading, changePage, extra_header, extra_value_func }) => 
    <div>
        <table className="Leaderboard">
            <thead>
                <tr>
                    { lines[0].rank ? <th>#</th> : undefined }
                    <th></th>
                    <th>Player</th>
                    { lines[0].time ? <th>Time</th> : undefined }
                    { lines[0].global_score ? <th>Dominance</th> : undefined }
                    { lines[0].update_date ? <th>Date</th> : undefined }
                    { lines[0].steam_id ? <th></th> : undefined }
                    { extra_header ? <th>{extra_header}</th> : undefined }
                </tr>
            </thead>
            <tbody>
                { lines.map((l, i) => <LeaderboardLine key={i} {...l} 
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
