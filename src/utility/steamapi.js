import { steam } from '../secrets'
import { fetchDataGET } from './common'

const getCountryIconURL = code =>
    code && ('https://steamcommunity-a.akamaihd.net/public/images/countryflags/' + (code).toLowerCase() + '.gif')

const getSteamInfo = steam_ids => { 
    return new Promise((resolve, reject) => {
        let id_list = ''
        steam_ids.forEach(id => id_list += id + ',')
        id_list = id_list.substr(0, id_list.length - 1)

        fetchDataGET('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' +
                                steam.key + '&steamids=' + id_list)().then(content => {
            if(!content.error_msg) {
                content.response.players.forEach(p => p.country_icon = getCountryIconURL(p.loccountrycode))

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Steam Info' })
        })
    })
}

export const appendSteamInfo = (lines) => {
    return new Promise((resolve, reject) => {
        let steam_ids = []
        lines.forEach(l => steam_ids.push(l.steam_id))
        
        getSteamInfo(steam_ids).then(steam_info => {
            if(!steam_info.error_msg)
                lines.forEach(l => 
                    l.steam_info = steam_info.response.players.find(p => p.steamid === l.steam_id))

            resolve()
        })
    })
}