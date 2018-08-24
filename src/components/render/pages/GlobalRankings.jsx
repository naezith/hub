import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const GlobalRankings = ({ player_count, start_rank, lines, changePage, loading }) => 
    <div>
        { player_count && <h2>Players: {player_count}</h2> }

        <Leaderboard  start_rank={start_rank} 
                     lines={lines} 
                     loading={loading} 
                     changePage={changePage} />
    </div>