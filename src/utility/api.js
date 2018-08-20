import { calcScore } from '../utility/calculations'
import { renameKey, fetchData, compareDesc } from '../utility/common'
import { sortEntries, sortWRs, getMostWRs, renameProps, getLevel } from '../utility/ron-hub'
import { appendSteamInfo } from './steamapi'


export const fetchGameInfo = () => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchGameInfo', { })().then((content) => {
            if(content.data) {
                content = content.data[0]
                
                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Game Info' })
        })
    })
}



export const fetchGlobalRank = (player_id) => { 
    return new Promise((resolve, reject) => {
        fetchData('/getGlobalRank', { player_id })().then((content) => {
            if(content.lb_data) {
                content = content.lb_data[0]
                renameKey(content, 'eq_rank', 'rank')
                renameKey(content, 'global_score', 'score')
                renameKey(content, 'register_date', 'update_date')
                content.player_id = player_id

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Global Rank' })
        })
    })
}

export const fetchGlobalRankings = (start_rank, line_count=10) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchGlobalRankings', { start_rank, line_count })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                content.start_rank = start_rank
                renameProps(content.lines, 'id', 'player_id')
                renameProps(content.lines, 'global_score', 'score')
                
                appendSteamInfo(content.lines).then(() => {
                    console.log(content)
                    resolve(content)
                })

            }
            else reject({ error_msg: 'Failed to fetch Global Rankings' })
        })
    })
}

export const fetchFinishedLevels = (player_id) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchFinishedLevels', { player_id })().then((content) => {
            if(content.data) {
                renameKey(content, 'data', 'entries')
                sortEntries(content.entries)
                content.player_id = player_id
                renameProps(content.entries, 'eq_rank', 'lb_rank')
                renameProps(content.entries, 'id', 'level_id')
                
                content.entries.forEach(e => {
                    delete e.rank
                    e.score = calcScore(e.lb_rank, e.lb_size)
                });

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Finished Levels' })
        })
    })
}

export const fetchPlayers = (username, steam_id) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchPlayers', { username, steam_id })().then((content) => {
            if(content.data) {
                renameKey(content, 'data', 'players')
                renameProps(content.players, 'global_score', 'score')
                renameProps(content.players, 'register_date', 'update_date')
                renameProps(content.players, 'id', 'player_id')

                content.players.sort((a, b) => compareDesc(a.score, b.score))

                content.username = username
                content.steam_id = steam_id

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Players' })
        })
    })
}

export const fetchWRs = () => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchWRs', { })().then((content) => {
            if(content.levels) {
                sortWRs(content.levels)
                renameProps(content.levels, 'global_score', 'score')
                content.most_wrs = getMostWRs(content.levels)

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch WRs' })
        })
    })
}

export const fetchLeaderboard = (level_id, start_rank, line_count=10) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchLeaderboard', { level_id, start_rank, line_count })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                renameProps(content.lines, 'eq_rank', 'rank')
                renameProps(content.lines, 'global_score', 'score')
                
                content.level = getLevel(level_id)
                content.level_id = level_id
                content.start_rank = start_rank
                
                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Level Leaderboard' })
        })
    })
}