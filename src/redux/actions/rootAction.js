import axios from 'axios'
import { url, API_KEY } from '../../api/api'

const searchActionsType = {
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',

}

const searchAction = (query)=> {
    return async (dispatch) => {
        try{

            const historico = localStorage.getItem('historico')
            const novo_historico = `${historico};${query}`

            if(historico){
                if(historico.includes(query)){
                    localStorage.setItem('historico',historico)
                }else{
                    localStorage.setItem('historico',novo_historico)
                }
            }else{
                localStorage.setItem("historico",query)
            }
            const res = await axios.get(url + `/?method=artist.search&artist=${query}&api_key=${API_KEY}&format=json`)
            
            const artists = res.data.results.artistmatches
            
            
            const resAlbum = await axios.get(url + `/?method=album.search&album=${query}&api_key=${API_KEY}&format=json`)
            
            const albums = resAlbum.data.results.albummatches
            
            dispatch({type:searchActionsType.SEARCH_SUCCESS, payload: {
                artists, albums
            }})

        }catch(err){
            console.log(err)
        }

    }
}

export {
    searchAction,
    searchActionsType
}