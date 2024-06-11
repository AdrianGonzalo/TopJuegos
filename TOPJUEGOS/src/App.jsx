import {useState} from 'react'

import './App.css'
import AllLinks from './views/AllLinks'
import AllGames from './views/AllGames'
import AllMulty from './views/AllMulty'

function App() {
    console.log('App -> render')

    const [view, setView] = useState('juegosSiglePlayer')

    const handleGamesClick = () => setView('juegosSiglePlayer')

    const handleMultyClick = () => setView('juegosMultiplayer')

    return <>
        <h1 className='Title'>TOP JUEGOS</h1>

        <AllLinks />

        {view === 'juegosSiglePlayer' && <AllGames onGamesLinkClick={handleGamesClick}/>}

        {view === 'juegosMultiplayer' && <AllMulty onMultyLinkClick={handleMultyClick}/>}

        {view === 'bandasSonoras' && <AllSongs />}
    </>
}

export default App