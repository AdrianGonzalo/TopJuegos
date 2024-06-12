import '../App.css'
import Link from "../components/Link";

function AllLinks({onGamesLinkClick, onMultyLinkClick, onSongLinkClick}) {
    const handleGamesClick = event => {
        event.preventDefault()

        onGamesLinkClick()
    }

    const handleMultyClick = event => {
        event.preventDefault()

        onMultyLinkClick()
    }

    const handleSongClick = event => {
        event.preventDefault()

        onSongLinkClick()
    }

    return <div>
        <ul className='AllLinks'>
            <li>
                <Link onClick={handleGamesClick}>Juegos SinglePlayer</Link>
            </li>

            <li>
                <Link onClick={handleMultyClick}>Juegos Multiplayer</Link>
            </li>

            <li>
                <Link onClick={handleSongClick}>Bandas Sonoras</Link>
            </li>
        </ul>
    </div>
}

export default AllLinks