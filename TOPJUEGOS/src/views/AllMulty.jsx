import '../App.css'

function AllMulty({ onMultyLinkClick }) {
    const handleMultyClick = event => {
        event.preventDefault()

        onMultyLinkClick()
    }
    return <div onSubmit={handleMultyClick}>
        <div className='AllGames'>
            <section className='Game'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg' className='Image' />

                <div className='AllDescription'>
                    <p>Baldur's Gate 3</p>

                    <p className='Grade100-90'>10</p>
                </div>
            </section>
        </div>
    </div>
}

export default AllMulty