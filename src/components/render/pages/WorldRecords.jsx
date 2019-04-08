import React from 'react'

import { Leaderboard } from '../Leaderboard'
import { Loading } from '../Loading'

export const WorldRecords = ({ levels, most_wrs, loading }) => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    const level_of_the_day = levels[day % levels.length]

    return (
        loading > 0 ?  <Loading /> : 

        <div>
            <h2>Record Holders</h2>
            <Leaderboard lines={most_wrs} 
                         loading={loading} 
                         extra_header={'WR +Secrets'}
                         extra_value_func={(obj) => 
                            obj.count + 
                            (obj.secrets_count ? (' (+' + obj.secrets_count + ')') : '')} />

            <h2>Levels</h2>
            <Leaderboard lines={levels} 
                         loading={loading} />

           <h4>Level of the Day: {levels.name}</h4> 
        </div>
    )
}
