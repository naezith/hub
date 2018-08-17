import fetch from 'isomorphic-fetch'

export const renameKey = (obj, oldkey, newkey) => {
    obj[newkey] = obj[oldkey]
    delete obj[oldkey]
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

export const startLoading = (comp, count = 1) => comp.setState({ loading: comp.state.loading + count }) 
//export const stopLoading = (comp, count = 1) => comp.setState({ loading: comp.state.loading + count }) 

export const steamProfile = (id) => 'https://steamcommunity.com/profiles/' + id