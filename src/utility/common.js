import fetch from 'isomorphic-fetch'

// slice(1) if querystring starts with &, this one does not
export const querystringToJSON = query => {            
    var pairs = query.slice().split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}

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
            console.log(e)
            return { error_msg: 'The server is down' }
        })

        return { ...content, error_msg: undefined }
    }


    export const fetchDataGET = (query) => 
    async () => {
        const rawResponse = await fetch(query)

        const content = await rawResponse.json().catch((e) => { 
            console.log(e)
            return { error_msg: 'The server is down' }
        })

        return { ...content, error_msg: undefined }
    }

export const startLoading = (component, count = 1) => component.setState({ loading: component.state.loading + count }) 

export const mutateState = (component, callback, ...promises) => {
    component.setState({ loading: component.state.loading + promises.length }) 

    Promise.all(
        promises.map(p => {
            return new Promise((resolve, reject) => 
                    p.catch(content => content).then(content => {
                        component.setState({...content, loading: component.state.loading - 1})
                        resolve()
                })
            )}
        )
    ).catch(e => e).then((e) =>  {
        if(callback) callback()
    })
}


export const getSteamURL = (id) => 'https://steamcommunity.com/profiles/' + id

export const navSelectedPage = (path, is_home) => {
    let curr = window.location.hash.split('#')[1]
 
    return (is_home && curr === '/') || curr === path ? 'nav-selected' : 'nav-not-selected'
}