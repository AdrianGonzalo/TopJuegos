import ImageSong from "./components/ImageSong"


function AllSongs() {
  return <div>
    <ImageSong name='Baldurs Gate 3'

      imageSrc={'/assets/image/imageSingle/BaldursGate3.avif'}

      nameGame={'Baldurs Gate 3'}

      nameSong={'The Weeping Dawn'} 

      songSrc={"/assets/soundtrack/BaldursGate3/BaldursGateAct1.mp3"}

      nameSong2={'Raphael\'s Final Act'} 

      songSrc2={"/assets/soundtrack/BaldursGate3/BaldursGateRaphael.mp3"}

      nameSong3={'Main Theme Part 1'}   

      songSrc3={'/assets/soundtrack/BaldursGate3/MainThemePart.mp3'}/>
      
  </div>

}

export default AllSongs
// {"/assets/soundtrack/BaldursGateAct1.mp3"} />
// {"/assets/soundtrack/BaldursGateRaphael.mp3"} 