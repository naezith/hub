import { renameKey, fetchData, compareDesc } from '../utility/common'
import { sortWRs, getMostWRs, renameProps, getLevel } from '../utility/ron-hub'
import { appendSteamInfo } from './steamapi'

export const ron_server = uri => 'https://api.naezith.com' + uri

export const fetchGameInfo = () => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchGameInfo'), { })().then((content) => {
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
        fetchData(ron_server('/getGlobalRank'), { player_id })().then((content) => {
            if(content.lb_data) {
                content = content.lb_data[0]
                renameKey(content, 'eq_rank', 'rank')
                renameKey(content, 'global_score', 'score')
                renameKey(content, 'register_date', 'update_date')
                content.player_id = player_id
                
                var lines = [{...content}]
                appendSteamInfo(lines).then(() => {
                    content.steam_info = lines[0].steam_info
                    resolve(content)
                })
            }
            else reject({ error_msg: 'Failed to fetch Global Rank' })
        })
    })
}

export const fetchGlobalRankings = (start_rank, line_count=10) => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchGlobalRankings'), { start_rank, line_count })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                content.start_rank = start_rank
                renameProps(content.lines, 'id', 'player_id')
                renameProps(content.lines, 'global_score', 'score')
                
                appendSteamInfo(content.lines).then(() => resolve(content))
            }
            else reject({ error_msg: 'Failed to fetch Global Rankings' })
        })
    })
}

export const fetchPersonalBests = (customlevels=0) => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchRecentScores'), {custom: customlevels})().then((content) => {
            if(content.data) {
                renameKey(content, 'data', 'lines')
                renameProps(content.lines, 'global_score', 'score')
                resolve(content)

                //appendSteamInfo(content.lines).then(() => resolve(content))
            }
            else reject({ error_msg: 'Failed to fetch Recent scores' })
        })
    })
}

export const fetchPlayers = (username, steam_id) => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchPlayers'), { username, steam_id })().then((content) => {
            if(content.data) {
                renameKey(content, 'data', 'players')
                renameProps(content.players, 'global_score', 'score')
                renameProps(content.players, 'register_date', 'update_date')
                renameProps(content.players, 'id', 'player_id')

                content.players.sort((a, b) => compareDesc(a.score, b.score))

                content.username = username
                content.steam_id = steam_id

                appendSteamInfo(content.players).then(() => resolve(content))
            }
            else reject({ error_msg: 'Failed to fetch Players' })
        })
    })
}

export const fetchWRs = () => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchWRs'), { })().then((content) => {
            if(content.levels) {
                sortWRs(content.levels)
                renameProps(content.levels, 'global_score', 'score')

                appendSteamInfo(content.levels).then(() => { 
                    content.most_wrs = getMostWRs(content.levels)

                    resolve(content) 
                })
            }
            else reject({ error_msg: 'Failed to fetch WRs' })
        })
    })
}

export const fetchSpeedrunLB = () => {
    return new Promise((resolve, reject) => {
        const fail = () => reject({ error_msg: 'Failed to fetch speedruns' })
        const start_rank = 0
        Promise.all(
            [1,2,3,4,5]
            .map( type => fetchData(ron_server('/fetchSpeedrunLB'), { start_rank, type })() )
        ).then( (content) => {
            const LB = content
                .map( (row, i) => Object({...row,...{chapter: i+1}}))
                .filter( row => row.lb_data && row.lb_data.length )
                .map( row => {
                    delete row.lb_data[0].rank
                    return {...row.lb_data[0],...{
                         time: row.lb_data[0].total_time
                        ,player_id: row.lb_data[0].id
                        ,chapter: row.chapter
                    } }
                } )
            if(!LB.length)
                return fail()
            appendSteamInfo(LB).then(() =>
                resolve({speedruns: LB}))
       }).catch( fail )
    })
}

export const fetchLeaderboard = (level_id, start_rank, line_count=10) => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchLeaderboard'), { level_id, start_rank, line_count })().then((content) => {
            if(content.lb_data) {
                renameKey(content, 'lb_data', 'lines')
                renameProps(content.lines, 'global_score', 'score')
                
                content.level = getLevel(level_id)
                content.level_id = level_id
                content.start_rank = start_rank
                
                appendSteamInfo(content.lines).then(() => resolve(content))
            }
            else reject({ error_msg: 'Failed to fetch Level Leaderboard' })
        })
    })
}

export const fetchFinishedLevels = (player_id, player_count) => {
    return new Promise((resolve, reject) => {
        fetchData(ron_server('/fetchFinishedLevels'), { player_id })().then((content) => {
            if(content.data && content.data.length) {
                renameKey(content, 'data', 'entries')
                content.player_id = player_id
                renameProps(content.entries, 'eq_rank', 'lb_rank')
                renameProps(content.entries, 'id', 'level_id')
                
                content.entries.forEach(e => delete e.rank)

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Finished Levels' })
        })
    })
}