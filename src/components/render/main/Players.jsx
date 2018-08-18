import React from 'react'

import { Leaderboard } from './Leaderboard'

export const Players = ({ username, steam_id, players, loading, error_msg, searchButton }) => {
    let in_username, in_steam_id

    return (
        <div>
            <h1>Search Players</h1>
            {loading > 0 ? <h1>Loading...</h1> : 
                <div>
                    <p>Enter in-game player name <b>or </b> 
                        SteamID64 (can be found on <a href='https://steamrep.com/' target='_blank' rel='noopener noreferrer'>SteamRep</a>)
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); searchButton(in_username.value, in_steam_id.value) }}>
                        <input id='username' type='text' defaultValue={username} placeholder="In-game player name" ref={ el => in_username = el } />
                        <input id='steam_id' type='text' defaultValue={steam_id} placeholder="SteamID64" ref={ el => in_steam_id = el } />
                        <button>Search</button>
                    </form>

                    {!username && !steam_id ? undefined : 
                        players.length === 0 ? <h1>There is no such player</h1> :
                        <Leaderboard    lines={players} 
                                        loading={loading} />
                    }
                </div>
            }
            <p>{error_msg}</p> 
        </div>
    )
}