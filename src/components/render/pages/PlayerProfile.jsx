import React from 'react'

import { Leaderboard } from '../Leaderboard'
import { Loading } from '../Loading'

export const PlayerProfile = ({ player_id, username, badge, rank, player_count, score, 
                    steam_id, steam_info, update_date, entries, loading }) => 

    loading > 0 ? 
        <div><Loading /><h3>It takes a while, please wait</h3></div>  : 
        
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
