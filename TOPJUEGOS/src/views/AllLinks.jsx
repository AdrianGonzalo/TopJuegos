import './AllLinks.css'
import Link from "../components/Link";
import {useState} from 'react'

function AllLinks({onGamesLinkClick, onMultyLinkClick, onSongLinkClick}) {

    const [link, setLink] = useState('Link')


    const handleGamesClick = event => {
        event.preventDefault()

        setLink('games')
        onGamesLinkClick()
    }

    const handleMultyClick = event => {
        event.preventDefault()

        setLink('multy')
        onMultyLinkClick()
    }

    const handleSongClick = event => {
        event.preventDefault()

        setLink('songs')
        onSongLinkClick()
    }

    return <div>
        <ul className='AllLinks'>
            <li>
                <Link className={`Link ${link ==='games' ? 'ColorUp' : ''}`}  onClick={handleGamesClick}>Juegos SinglePlayer</Link>
            </li>

            <li>
                <Link className={`Link ${link ==='multy' ? 'ColorUp' : ''}`} onClick={handleMultyClick}>Juegos Multiplayer</Link>
            </li>

            <li>
                <Link className={`Link ${link ==='songs' ? 'ColorUp' : ''}`} onClick={handleSongClick}>Bandas Sonoras</Link>
            </li>
        </ul>
    </div>
}

export default AllLinks