import './ImageSong.css'


function ImageSong({ nameGame, imageSrc, nameSong, songSrc, nameSong2, songSrc2, nameSong3, songSrc3 }) {
  return (
    <div className='AllImageSongs'>

      <section className='ImageSong2'>

        <img src={imageSrc} className='ImageSong' />

        <p className='NameGame'>{nameGame}</p>

        <div className='AllDescriptionSong'>
          <div className='PAudio'>
            <p className='NameSong'>{nameSong}</p>
            <div className='SongCounter'>
              <audio controls className='Song' src={songSrc} />
            </div>
          </div >

          <div className='PAudio'>
            <p className='NameSong'>{nameSong2}</p>
            <div className='SongCounter'>
              <audio controls className='Song' src={songSrc2} />
            </div>
          </div>

          <div className='PAudio'>
            <p className='NameSong'>{nameSong3}</p>
            <div className='SongCounter'>
              <audio controls className='Song' src={songSrc3} />
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default ImageSong


