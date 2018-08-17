import { renameKey, fetchData } from '../utility/common'
import { sortEntries } from '../utility/ron-hub'

export const fetchGlobalRankings = (start_rank) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchGlobalRankings', { start_rank })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                content.start_rank = start_rank

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Global Rankings' })
        })
    })
}

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

export const fetchFinishedLevels = (player_id) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchFinishedLevels', { player_id })().then((content) => {
            if(content.data) {
                renameKey(content, 'data', 'entries')
                content.entries = sortEntries(content.entries)
                content.player_id = player_id

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Finished Levels' })
        })
    })
}