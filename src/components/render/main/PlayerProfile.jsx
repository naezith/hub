import React from 'react'

import { Leaderboard } from './Leaderboard'
import { SteamProfile } from '../SteamProfile'
import { RankIcon } from '../RankIcon'
import { DateText } from '../DateText';

import { formatDominance, formatRank } from '../../../utility/formatters'
import { calcDominance } from '../../../utility/calculations'
import { ranks } from '../../../data/naezith'

export const PlayerProfile = ({ username, badge, rank, player_count, score, 
                    steam_id, register_date, entries, loading, error_msg }) => 
    <div>
        <h1>Player Profile</h1>
        {loading > 0 ? <h1>Loading...</h1> : 
            <div>
                <div className='player-info'>
                    <RankIcon name={ranks[badge]} /><h2 className='same-line'>{username}</h2>
                    <p>Started playing {<DateText date={register_date}/>}</p>
                    <SteamProfile id={steam_id} inside={'Steam Profile'} />
                    <p>Rank: {formatRank(rank, player_count)}</p>
                    <p>Dominance: {formatDominance(calcDominance(score, 'global'))}</p>
                </div>

                <Leaderboard lines={entries} 
                             loading={loading} 
                             dominance_scale='level'
                             dominance_precision={2} />
            </div>
        }
        <p>{error_msg}</p> 
    </div>
