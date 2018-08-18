import React from 'react'

import { Leaderboard } from "./Leaderboard"
import { WorldRecordLine } from '../WorldRecordLine'

export const WorldRecords = ({ levels, most_wrs, loading, error_msg }) => 
    <div>
        <h1>World Records</h1>
        {loading > 0 ? <h1>Loading...</h1> : 
            <div>
                <h1>Most WRs</h1>
                <Leaderboard    lines={most_wrs} 
                                loading={loading} 
                                extra_header={'WR Count (+Secrets)'}
                                extra_value_func={(obj) => 
                                    obj.count + 
                                    (obj.secrets_count ? (' (+' + obj.secrets_count + ')') : '')} />

                <h1>Levels</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Time</th>
                            <th></th>
                            <th>Player</th>
                            <th>Dominance</th>
                        </tr>
                    </thead>
                    <tbody>
                        { levels.map((l, i) => <WorldRecordLine key={i} {...l} />) }
                    </tbody>
                </table>
            </div>
        }
        <p>{error_msg}</p> 
    </div>
