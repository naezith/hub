import React from 'react'

import { LeaderboardLine } from '../LeaderboardLine'

export const Leaderboard = ({ start_rank, lines, loading, error_msg, changePage }) => (
    <div>
        <h1>Global Rankings</h1>
        {loading > 0 ? <h1>Loading...</h1> :
        <div>
            <table className="Leaderboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Dominance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lines.map((l, i) => <LeaderboardLine key={i} {...l} />)
                    }
                </tbody>
            </table>

            {start_rank >= lines.length ? 
                <button onClick={(event) => changePage(event, 'previous') } disabled={loading}>Previous</button> : undefined}
            <button onClick={(event) => changePage(event, 'next')} disabled={loading}>Next</button>  
        </div>}

        <p>{error_msg}</p> 
    </div>
)