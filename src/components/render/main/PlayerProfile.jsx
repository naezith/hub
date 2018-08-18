import React from 'react'

import { SteamProfile } from '../SteamProfile'
import { RankIcon } from '../RankIcon'
import { EntryLine } from '../EntryLine'

import { formatDominance, formatDate, formatRank } from '../../../utility/formatters'
import { calcDominance } from '../../../utility/calculations'
import { ranks } from '../../../data/naezith'

export const PlayerProfile = ({ username, badge, rank, player_count, global_score, 
                    steam_id, register_date, entries, loading, error_msg }) => 
    <div>
        <h1>Player Profile</h1>
        {loading > 0 ? <h1>Loading...</h1> : 
            <div>
                <div className='player-info'>
                    <RankIcon name={ranks[badge]} /><h2 className='same-line'>{username}</h2>
                    <p>Started playing {formatDate(register_date)}</p>
                    <SteamProfile id={steam_id} inside={'Steam Profile'} />
                    <p>Rank: {formatRank(rank, player_count)}</p>
                    <p>Dominance: {formatDominance(calcDominance(global_score, 'global'))}</p>
                </div>

                <table className="Leaderboard">
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Time</th>
                            <th>Mastery Time</th>
                            <th>Rank</th>
                            <th>Dominance</th>
                        </tr>
                    </thead>
                    <tbody>
                        { entries.map((l, i) => <EntryLine key={i} {...l} />) }
                    </tbody>
                </table>
            </div>
        }
        <p>{error_msg}</p> 
    </div>
