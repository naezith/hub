import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const GlobalRankings = ({ player_count, start_rank, lines, changePage, loading, error_msg }) => 
    <div>
        <h1>Global Rankings</h1>
        { loading > 0 ? <h1>Loading...</h1> :

        <div>
            <h2>Players: {player_count}</h2>
            <Leaderboard    start_rank={start_rank} 
                            lines={lines} 
                            loading={loading} 
                            changePage={changePage} />
        </div>
        }

        <p>{error_msg}</p> 
    </div>