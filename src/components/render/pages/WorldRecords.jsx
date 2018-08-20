import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const WorldRecords = ({ levels, most_wrs, loading }) => 
        loading > 0 ? <h2>Loading...</h2> : 
        
        <div>
            <h2>Record Holders</h2>
            <Leaderboard    lines={most_wrs} 
                            loading={loading} 
                            extra_header={'WR +Secrets'}
                            extra_value_func={(obj) => 
                                obj.count + 
                                (obj.secrets_count ? (' (+' + obj.secrets_count + ')') : '')} />

            <h2>Levels</h2>
            <Leaderboard    lines={levels} 
                            loading={loading} />
        </div>
