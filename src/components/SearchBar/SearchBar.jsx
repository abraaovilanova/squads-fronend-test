import axios from 'axios'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { url, API_KEY } from '../../api/api'
import { searchAction } from '../../redux/actions/rootAction'

const SearchBar = (props) => {
    const [query, setQuery] = useState('')
    const { search } = props

    const handleSearch = async () => {
        search(query)
    }

    const handleOnchange = async (e) => {
        const searchQuery = e.target.value
        setQuery(searchQuery)
    }

    return(
        <div className="searchbar">

            <input
                type="text"
                value={ query }
                onChange={handleOnchange}
            />

            <button onClick={handleSearch}>Search</button>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        artist: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        search: (query) => {
            dispatch(searchAction(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)