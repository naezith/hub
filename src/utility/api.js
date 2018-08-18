import { renameKey, fetchData, compareDesc } from '../utility/common'
import { sortEntries, sortWRs, getMostWRs, renameProps } from '../utility/ron-hub'


export const fetchGlobalRank = (player_id) => {
    return new Promise((resolve, reject) => {
        fetchData('/getGlobalRank', { player_id })().then((content) => {
            if(content.lb_data) {
                content = content.lb_data[0]
                renameKey(content, 'eq_rank', 'rank')
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

                resolve(content)
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
                renameProps(content.entries, 'eq_rank', 'rank')

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
                content.players = content.data.sort((a, b) => 
                                compareDesc(a.global_score, b.global_score))
                delete content.data
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
                content.most_wrs = getMostWRs(content.levels)
                console.log(content.most_wrs)
                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch WRs' })
        })
    })
}
