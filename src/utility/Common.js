import fetch from 'isomorphic-fetch'

export const renameKey = (obj, oldkey, newkey) => {
    obj[newkey] = obj[oldkey]
    delete obj[oldkey]
}

export const daysSince = (date) => 
    Math.round(Math.abs(((new Date(date)).getTime() - (new Date()).getTime())/(24*60*60*1000)));

export const compareAsc = (a, b) => a > b ? 1 : a < b ? -1 : 0
export const compareDesc = (a, b) => a < b ? 1 : a > b ? -1 : 0
export const combineCompares = (...compares) => {
    var result

    for(var i = 0; i < compares.length; ++i) {
        result = compares[i]

        if(result !== 0) return result    
    }
    
    return result
}

export const fetchData = (query, data) => 
    async () => {
        const rawResponse = await fetch(query, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const content = await rawResponse.json().catch((e) => { 
            return { error_msg: 'The game server is down' }
        })

        return { ...content, error_msg: undefined }
    }

export const startLoading = (component, count = 1) => component.setState({ loading: component.state.loading + count }) 

export const mutateState = (component, ...promises) => {
    component.setState({ loading: component.state.loading + promises.length }) 

    promises.map(p => p.catch(content => content).then(content =>  
        component.setState({...content, loading: component.state.loading - 1})
    ))
}


export const getSteamURL = (id) => 'https://steamcommunity.com/profiles/' + id