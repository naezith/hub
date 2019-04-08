import React from 'react'

import { Leaderboard } from '../Leaderboard'
import { Loading } from '../Loading'

export const WorldRecords = ({ levels, most_wrs, loading }) => {
    const shuffleSeed = require('shuffle-seed');
    
    const now = new Date();
    const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24));
    
    const seed = Math.floor(daysSinceEpoch / levels.length);
    const shuffledLevels = shuffleSeed.shuffle(levels, seed);
    const level_of_the_day = shuffledLevels[daysSinceEpoch % levels.length];

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
