import './Link.css'

function Link({onClick, children}){
    return (
        <li>
            <a href="#" className='Link' onClick={onClick}>
                {children}
            </a>
        </li>
    );
}

export default Link