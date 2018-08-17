import { renameKey, fetchData } from '../utility/common'

export const fetchGlobalRankings = (req_state_rank) => {
    return new Promise((resolve, reject) => {
        fetchData('/fetchGlobalRankings', { start_rank: req_state_rank })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                content.start_rank = req_state_rank
                
                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Global Rankings' })
        })
    })
}