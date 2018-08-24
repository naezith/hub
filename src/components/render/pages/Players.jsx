import React from 'react'

import { Leaderboard } from '../Leaderboard'
import { Loading } from '../Loading'

export const Players = ({ username, steam_id, players, loading, searchButton }) => {
    let in_username, in_steam_id

    return  <div>
                <p>Enter in-game player name <b>or </b> 
                    SteamID64 (can be found on <a href='https://steamrep.com/' target='_blank' rel='noopener noreferrer'>SteamRep</a>)
                </p>
                <form onSubmit={(e) => { e.preventDefault(); searchButton(in_username.value, in_steam_id.value) }}>
                    <input id='username' type='text' defaultValue={username} placeholder=' In-game player name' ref={ el => in_username = el } />
                    <input id='steam_id' type='text' defaultValue={steam_id} placeholder=' SteamID64' ref={ el => in_steam_id = el } />
                    <button disabled={loading}>Search</button>
                </form>

                { loading > 0 ? <Loading /> : 
                    <div>
                        {!username && !steam_id ? undefined : 
                            players.length === 0 ? <h2>There is no such player</h2> :
                            <Leaderboard lines={players} 
                                        loading={loading}
                                        date_header='Register Date' />
                        }
                    </div>
                }
            </div>
}