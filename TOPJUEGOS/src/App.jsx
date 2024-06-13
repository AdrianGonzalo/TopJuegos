import {useState} from 'react'

import './App.css'
import AllLinks from './views/AllLinks'
import AllGames from './views/AllGames'
import AllMulty from './views/AllMulty'
import AllSongs from './views/AllSongs'

function App() {
    console.log('App -> render')

    const [view, setView] = useState('juegosSiglePlayer')

    const handleGamesClick = () => setView('juegosSiglePlayer')

    const handleMultyClick = () => setView('juegosMultiplayer')

    const handleSongClick = () => setView('juegosSong')

    return <>
        <h1 className='Title'>TOP JUEGOS</h1>

        <AllLinks  onGamesLinkClick={handleGamesClick} onMultyLinkClick={handleMultyClick} onSongLinkClick={handleSongClick}/>

        {view === 'juegosSiglePlayer' && <AllGames onGamesLinkClick={handleGamesClick}/>}

        {view === 'juegosMultiplayer' && <AllMulty onMultyLinkClick={handleMultyClick}/>}

        {view === 'juegosSong' && <AllSongs onSongLinkClick={handleSongClick}/>}

        <p className='Footer'>Updated as of 13/06/2024 & programmed by Adrian</p>
    </>
}

export default App