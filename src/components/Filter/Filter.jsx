import React from 'react'

const Filter = ({ handleOnClick }) => {
    return(
        <div className="Filter">
            <p>Mostrar resultados para:</p>
            <button onClick={()=>handleOnClick('ALL')}>All</button>
            <button onClick={()=>handleOnClick('ARTISTA')}>Artista</button>
            <button onClick={()=>handleOnClick('ALBUMS')}>Albums</button>

        </div>
    )
}

export default Filter