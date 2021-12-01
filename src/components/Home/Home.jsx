import React from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
    const  { artists, albums }  = props
    const {filterQuery} = props

    const getSearchList = (data,text) => {
        return (data.map(item => {
            return(
                <div className="card" >
                    <p>{text}: {item.name}</p>
                </div>    
            )
        }))
    }

    return(
        <div className="home">
            {
                filterQuery == 'ALL'? 
                    <>
                        {getSearchList(artists, 'artista')}
                        {getSearchList(albums, 'Album')}
                    </>
                : 
                
                filterQuery == 'ARTISTA' ?
                    <>
                        {getSearchList(artists, 'artista')}
                    </>
                :
                filterQuery == 'ALBUMS' ?
                    <>
                        {getSearchList(albums, 'Album')}
                    </>
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    if(state){
        return {
            artists: state.artists.artist,
            albums: state.albums.album
        }
    }else{
        return {
            artists: [],
            albums:[]
        }
    }
}

export default connect(mapStateToProps)(Home)