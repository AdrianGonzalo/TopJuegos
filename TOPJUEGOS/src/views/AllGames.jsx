import '../App.css'
import Game from './components/Image'

function AllGames() {

    return <div>
        <div className='AllGames'>
            <Game name='Baldurs Gate 3' imageSrc={'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg'} grade='10'/>
            {/* <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Baldur's Gate 3</p>

                    <p className='Grade100-90'>10</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://media.contentapi.ea.com/content/dam/masseffect/images/2020/10/me-featured-image-mele-keyart-logo.jpg.adapt.crop16x9.1023w.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Mass Effect</p>

                    <p className='Grade100-90'>10</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png' className='Image' />

                <div className='AllDescription'>
                    <p>Elden Ring</p>

                    <p className='Grade100-90'>9.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://store-images.s-microsoft.com/image/apps.64063.14482474285447263.0a4055ed-9044-4c0c-abf5-292bb1bcb735.ba2d56c4-a5d7-48b3-9ecb-586e9379581d?q=90&w=480&h=270' className='Image' />

                <div className='AllDescription'>
                    <p>Persona5 Royal</p>

                    <p className='Grade100-90'>9</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1678991267' className='Image' />

                <div className='AllDescription'>
                    <p>Sekiro</p>

                    <p className='Grade100-90'>9</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/4fANjkT8w1y3Z5JUtS9MJtmQ.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>The Last Of Us</p>

                    <p className='Grade100-90'>9</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://catholicgamereviews.com/wp-content/uploads/2022/07/kratos-and-boy-title-1.webp' className='Image' />

                <div className='AllDescription'>
                    <p>God Of War</p>

                    <p className='Grade100-90'>9</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://i.blogs.es/b06eda/bo300/1366_2000.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Black Ops III</p>

                    <p className='Grade80-70'>8.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/img/rnd/202011/0522/0qBPvJ5xqVxay9Ia0LviK6wG.png' className='Image' />

                <div className='AllDescription'>
                    <p>Beyond Two Souls</p>

                    <p className='Grade80-70'>8.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Portal 2</p>

                    <p className='Grade80-70'>8.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://gaming-cdn.com/images/products/15527/orig/no-rest-for-the-wicked-pc-juego-steam-europe-cover.jpg?v=1713457793' className='Image' />

                <div className='AllDescription'>
                    <p>No Rest</p>

                    <p className='Grade80-70'>8.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png' className='Image' />

                <div className='AllDescription'>
                    <p>Ark</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f' className='Image' />

                <div className='AllDescription'>
                    <p>The Witcher 3</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/231430/capsule_616x353.jpg?t=1661158807' className='Image' />

                <div className='AllDescription'>
                    <p>Company 2</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://livecards.es/pl/horizon-zero-dawn-complete-edition-pc-55230.png' className='Image' />

                <div className='AllDescription'>
                    <p>Horizon Zero</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202210/2609/qRntDn4UD9dyoGcfVJdQfIWQ.png' className='Image' />

                <div className='AllDescription'>
                    <p>Wo Long</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/img/rnd/202010/2823/CYH8Z7RFpP45L5U2XpTI7JeW.png' className='Image' />

                <div className='AllDescription'>
                    <p>Shadow</p>

                    <p className='Grade80-70'>8</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cdn1.epicgames.com/columbine/offer/DETROIT_1-2560x1440-4fd6608a56880dc5d8e9d968517113c3.jpg?h=270&quality=medium&resize=1&w=480' className='Image' />

                <div className='AllDescription'>
                    <p>Detroit</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://m.media-amazon.com/images/I/81qEu7TSKgL._AC_UF894,1000_QL80_.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Inazuma Eleven</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://www.gameit.es/wp-content/uploads/2022/10/uncharted-coleccion-1.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Uncharted</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/img/cfn/11307GuAHH7iQiOD4izIk0LfwiEqxk8YuSh6_6z4bBNpNiakl7J0slnPcDaZ3MTFoT0bCw0D0iLyFrXhc8Au0FGTv80hw0wU.png' className='Image' />

                <div className='AllDescription'>
                    <p>Tomb Raider</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://i.ebayimg.com/images/g/PMcAAOSwOh9lxKq9/s-l1600.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Pokemon</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cybergamestore.ru/wp-content/uploads/2022/12/project-zomboid-1.jpeg' className='Image' />

                <div className='AllDescription'>
                    <p>Proyect Zomboid</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cdn.juegosarea.com/su/pe/super-mario-64-d.jpg?width=200&height=200&aspect_ratio=1:1' className='Image' />

                <div className='AllDescription'>
                    <p>Mario64</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Starcraft II</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QkVodaONUtc98_FjvMrqT-db9w6H38KrZg&s' className='Image' />

                <div className='AllDescription'>
                    <p>A Plague Tale</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/img/rnd/202106/0411/HMFFrDc55LTdqf9sls0eMzK4.png' className='Image' />

                <div className='AllDescription'>
                    <p>Green Hell</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://images.ctfassets.net/s5n2t79q9icq/cAQJBdFMcKDZY4BhUUsDx/616212775582792942f3927c843aea80/arena_Meta-ShareImage.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Magic</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://i.pinimg.com/originals/e5/b5/0e/e5b50e96e6f95a72f435693fa0c7649c.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Mario Galaxy</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202110/2820/n5HAYQ1mOG7JHnU288faOq9l.png' className='Image' />

                <div className='AllDescription'>
                    <p>Isaac</p>

                    <p className='Grade80-70'>7.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://m.gjcdn.net/game-header/950/685171-hwuds87c-v4.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Five Nights</p>

                    <p className='Grade60'>6.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://www.muylinux.com/wp-content/uploads/2013/07/Left4Dead2.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Left 4 Dead</p>

                    <p className='Grade60'>6.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKI5frUMEQ9qI5yjLZ8ZyifoDau19pOXqBw&s' className='Image' />

                <div className='AllDescription'>
                    <p>A Story</p>

                    <p className='Grade60'>6.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Back 4 Blood</p>

                    <p className='Grade60'>6</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://www.movilzona.es/app/uploads-movilzona.es/2022/07/empezar-aldea-clash-of-clans.jpg?x=480&y=375&quality=40' className='Image' />

                <div className='AllDescription'>
                    <p>Clash Of Clans</p>

                    <p className='Grade60'>6</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://media.vandal.net/ivandal/12/63/1200x630/47/47486/naruto-to-boruto-shinobi-striker-2018831115429_1.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Naruto</p>

                    <p className='Grade60'>6</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://3rd-strike.com/wp-content/uploads/2022/08/60-Parsecs-2.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>60 Parsec</p>

                    <p className='Grade50'>5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202203/0903/BRSykxZAAT0OuPrG5nJz19fg.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>TheQuarry</p>

                    <p className='Grade40-30'>4.5</p>
                </div>
            </section>

            <section className='Game'>
                <img src='https://m.media-amazon.com/images/I/71Z7lh42hXL.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Steelrising</p>

                    <p className='Grade40-30'>3.5</p>
                </div>
            </section> */}
        </div>
    </div>

}

export default AllGames