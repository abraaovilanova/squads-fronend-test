import { searchActionsType } from '../actions/rootAction'

const initialState = {
    artists:[],
    albums:[],
}

const searchArtist = (state, action) => {
    switch(action.type){
        case searchActionsType.SEARCH_SUCCESS:
            const data = action.payload.artists
            return {
                artists: action.payload.artists,
                albums: action.payload.albums
            }
    }
}

export default searchArtist