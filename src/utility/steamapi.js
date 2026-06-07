const getCountryIconURL = code =>
    code && ('https://steamcommunity-a.akamaihd.net/public/images/countryflags/' + (code).toLowerCase() + '.gif')

async function getSteamPlayerSummaries(steamIds) {
    const STEAM_PROXY_BASE = "https://steam-proxy.naezith.workers.dev";

    const url =
        `${STEAM_PROXY_BASE}/player-summaries?steamids=` +
        encodeURIComponent(steamIds.join(","));

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Steam proxy failed: ${response.status}`);
    }

    return response.json();
}

const getSteamInfo = steam_ids => { 
    return new Promise((resolve, reject) => {
        getSteamPlayerSummaries(steam_ids).then(content => {
            if(!content.error_msg) {
                content.response.players.forEach(p => p.country_icon = getCountryIconURL(p.loccountrycode))

                resolve(content)
            }
            else reject({ error_msg: 'Failed to fetch Steam Info' })
        }).catch(reject)
    })
}

export const appendSteamInfo = (lines) => {
    return new Promise((resolve, reject) => {
        const steam_ids = lines.map(l => l.steam_id)
        
        getSteamInfo(steam_ids).then(steam_info => {
            if(!steam_info.error_msg)
                lines.forEach(l => 
                    l.steam_info = steam_info.response.players.find(p => p.steamid === l.steam_id))
            lines.forEach(l => {
                if(!l.steam_info) l.steam_info = {};
                l.steam_info.country_icon = getCountryIconURL(l.country)
            })
            resolve()
        })
    })
}
