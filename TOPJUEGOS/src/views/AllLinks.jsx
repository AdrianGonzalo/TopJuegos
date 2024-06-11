import '../App.css'
import Link from "../components/Link";

function AllLinks() {
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
            <Link onClick={handleGamesClick}>Juegos SinglePlayer</Link>
            <Link onClick={handleMultyClick}>Juegos Multiplayer</Link>
            <Link onClick={handleSongClick}>Bandas Sonoras</Link>
        </ul>
    </div>
}

export default AllLinks