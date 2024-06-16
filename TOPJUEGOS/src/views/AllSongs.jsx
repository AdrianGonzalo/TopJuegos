import ImageSong from "./components/ImageSong"


function AllSongs() {
  return <div>
    <ImageSong

      imageSrc={'/assets/image/imageSingle/BaldursGate3.avif'}

      nameGame={'Baldurs Gate 3'}

      nameSong={'The Weeping Dawn'}

      songSrc={"/assets/soundtrack/BaldursGate3/BaldursGateAct1.mp3"}

      nameSong2={'Raphael\'s Final Act'}

      songSrc2={"/assets/soundtrack/BaldursGate3/BaldursGateRaphael.mp3"}

      nameSong3={'Main Theme Part 1'}

      songSrc3={'/assets/soundtrack/BaldursGate3/MainThemePart.mp3'} />


    <ImageSong

      imageSrc={'/assets/image/imageSingle/EldenRing.avif'}

      nameGame={'Elden Ring'}

      nameSong={'Radagon of the Golden'}

      songSrc={"/assets/soundtrack/EldenRing/FinalBoss.mp3"}

      nameSong2={'Mohg, Lord of Blood'}

      songSrc2={"/assets/soundtrack/EldenRing/Mohg.mp3"}

      nameSong3={'godskin apostle'}

      songSrc3={'/assets/soundtrack/EldenRing/Apostles.mp3'} />


    <ImageSong

      imageSrc={'/assets/image/imageSingle/Persona5.jpg'}

      nameGame={'Persona 5 Royal'}

      nameSong={'Last Surprise'}

      songSrc={"/assets/soundtrack/Persona5/LastSurprise.mp3"}

      nameSong2={'Life Will Change'}

      songSrc2={"/assets/soundtrack/Persona5/LifeWillChange.mp3"}

      nameSong3={'Take Over'}

      songSrc3={'/assets/soundtrack/Persona5/TakeOver.mp3'} />
  </div>

}

export default AllSongs
// {"/assets/soundtrack/BaldursGateAct1.mp3"} />
// {"/assets/soundtrack/BaldursGateRaphael.mp3"} 