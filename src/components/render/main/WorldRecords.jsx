import React from 'react'

import { WorldRecordLine } from '../WorldRecordLine'

export const WorldRecords = ({ levels, loading, error_msg }) => 
    <div>
        <h1>World Records</h1>
        {loading > 0 ? <h1>Loading...</h1> : 
            <div>
                <table className="Leaderboard">
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
