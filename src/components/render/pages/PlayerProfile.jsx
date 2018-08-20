import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const PlayerProfile = ({ player_id, username, badge, rank, player_count, score, 
                    steam_id, steam_info, update_date, entries, loading }) => 

    loading > 0 ? 
        <div><h1>Loading...</h1><h2>It takes a while, please wait</h2></div>  : 
        
        <div>
            <Leaderboard lines={ [{ player_id, username, badge, 
                                    lb_rank: rank, lb_size: player_count, 
                                    score, steam_id, steam_info, update_date }]} 
                         loading={loading} 
                         date_header='Register Date'/>

            <Leaderboard lines={entries} 
                            loading={loading} 
                            dominance_scale='level'
                            dominance_precision={2} />
        </div>
