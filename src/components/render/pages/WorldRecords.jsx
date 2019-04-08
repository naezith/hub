import React from 'react'

import { Leaderboard } from '../Leaderboard'
import { Loading } from '../Loading'
import shuffleSeed from 'shuffle-seed'

export const WorldRecords = ({ levels, most_wrs, loading }) => {
    // Filter out the secret levels
    const non_secret_levels = levels.filter(level => !level.is_secret)

    // Make a seed which relies on the day
    const now = new Date()
    const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24))
    const seed = Math.floor(daysSinceEpoch / non_secret_levels.length)
    
    // Shuffle levels and pick the level of the day
    const level_of_the_day = shuffleSeed.shuffle(non_secret_levels, seed)[daysSinceEpoch % non_secret_levels.length]

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

            <h1>Level of the Day</h1>
            <Leaderboard lines={ [level_of_the_day] } 
                         loading={loading} />
        </div>
    )
}
