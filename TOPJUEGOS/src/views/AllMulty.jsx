import '../App.css'
import Game from './components/Image'


function AllMulty() {

    return <div>
        <div className='AllGames'>
            <Game name='Black Ops III' imageSrc={'/assets/image/imageMulty/BlackOpsIII.jpg'} platform='PS4/PC' hours='1690h' grade='9' />

            <Game name='Ark' imageSrc={'/assets/image/imageMulty/Ark.webp'} platform='PC/PS4' hours='1914h' grade='8.5' />

            <Game name='Overwacht' imageSrc={'/assets/image/imageMulty/Overwacht.png'} platform='PC/PS4' hours='462h' grade='8' />

            <Game name='Fortnite' imageSrc={'/assets/image/imageMulty/Fortnite.jfif'} platform='PC/PS4' hours='324h' grade='8' />

            <Game name='Raimbow Six' imageSrc={'/assets/image/imageMulty/Raimbow.jfif'} platform='PC/PS4' hours='381h' grade='8' />

            <Game name='Counter Strike' imageSrc={'/assets/image/imageMulty/Counter.png'} platform='PC' hours='140h' grade='8' />

            <Game name='Hell Divers' imageSrc={'/assets/image/imageMulty/Hell.avif'} platform='PC' hours='67h' grade='8' />

            <Game name='Apex Legends' imageSrc={'/assets/image/imageMulty/Apex.avif'} platform='PC/PS4' hours='92h' grade='7.5' />

            <Game name='Dead by Daylight' imageSrc={'/assets/image/imageMulty/Dead.jfif'} platform='PC' hours='53h' grade='7.5' />

            <Game name='7 Days to Die' imageSrc={'/assets/image/imageMulty/Dead.jpg'} platform='PC' hours='26h' grade='7.5' />

            <Game name='Rust' imageSrc={'/assets/image/imageMulty/Rust.jpg'} platform='PC' hours='16h' grade='6.5' />

            <Game name='Rocket League' imageSrc={'/assets/image/imageMulty/Rocket.jpg'} platform='PC' hours='63h' grade='6' />

            <Game name='Warframe' imageSrc={'/assets/image/imageMulty/War.png'} platform='PC' hours='21h' grade='6' />
        </div>
    </div>
}

export default AllMulty