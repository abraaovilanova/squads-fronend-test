import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar'
import Home from './components/Home/Home'
import Filter from './components/Filter/Filter';
import { useState } from 'react';
import { connect } from 'react-redux'

function App(props) {

  const {artists, albums} = props
  const [filterQuery, setFilterQuery] = useState('ALL')
  const [historico, setHistorico] = useState(undefined)

  const handleOnClick = (text) => {
    setFilterQuery(text)
}

const getHistorico = () => {
  setHistorico(localStorage.getItem('historico').split(';'))
}

  return (
    <div className="App">
      <h1>Minha musica</h1>
      <button onClick={getHistorico}>Historico</button>
      <SearchBar />
      {historico?.map(item => {
        return(
          <p>{item}</p>
        )
      })}
      { artists.length && albums.length?
        <Filter handleOnClick={handleOnClick} />
        : ''
      }
      <Home filterQuery={filterQuery}/>
    </div>
  );
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


export default connect(mapStateToProps)(App);
