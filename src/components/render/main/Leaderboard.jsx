import React from 'react'

import { LeaderboardLine } from '../LeaderboardLine'

export const Leaderboard = ({ start_rank, lines, loading, changePage, extra_header, extra_prop_name }) => 
    <div>
        <table className="Leaderboard">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Player</th>
                    <th>Dominance</th>
                    {extra_header ? <th>{extra_header}</th> : undefined}
                </tr>
            </thead>
            <tbody>
                { lines.map((l, i) => <LeaderboardLine key={i} {...l} 
                                        extra_value={l[extra_prop_name]} />) }
            </tbody>
        </table>

        {changePage ? 
            <div>
            {start_rank >= lines.length ? 
                <button onClick={(event) => changePage(event, 'previous') } disabled={loading}>Previous</button> : undefined}
            <button onClick={(event) => changePage(event, 'next')} disabled={loading}>Next</button> 
            </div> : undefined}
    </div>
