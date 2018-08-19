import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const GlobalRankings = ({ player_count, start_rank, lines, changePage, loading, error_msg }) => 
    <div>
        <h1>Global Rankings</h1>
            {player_count ? 
                 <h2>Players: {player_count}</h2> : undefined}

        { loading > 0 ? <h1>Loading...</h1> :

            <Leaderboard    start_rank={start_rank} 
                            lines={lines} 
                            loading={loading} 
                            changePage={changePage} />
        }

        <p>{error_msg}</p> 
    </div>