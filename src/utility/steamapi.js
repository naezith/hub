import { steam } from '../secrets'
import { fetchDataGET } from './common'


export const getCountryIconURL = code =>
    code ?
    'https://steamcommunity-a.akamaihd.net/public/images/countryflags/'+(code).toLowerCase()+'.gif' : undefined

export const getSteamInfo = (steam_ids) => { 
    return new Promise((resolve, reject) => {
        let id_list = ''
        steam_ids.forEach(id => id_list += id + ',');
        id_list = id_list.substr(0, id_list.length - 1)

        fetchDataGET('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' +
            steam.key + '&steamids=' + id_list)().then((content) => {

            if(!content.error_msg) {
                var players = content.response.players
                for(var i = 0; i < players.length; ++i) 
                    players[i].country_icon = getCountryIconURL(players[i].loccountrycode)

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Steam Info' })
        })
    })
}
