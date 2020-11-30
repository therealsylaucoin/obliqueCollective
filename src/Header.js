//Using a function component for the Header since it's purely presentational.
const Header = () => {
    
    return(
        <header>

            <nav>

                <ul>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#contribute">Add to Deck</a>
                    </li>

                    <li>
                        <a href="#randomCollective">Collective Strategies</a>
                    </li>

                    <li>
                        <a href="https://twitter.com/sylaucoin" target="_blank" rel="noreferrer">Get In Touch</a>
                    </li>

                </ul>

            </nav>

            <h1 >Oblique Strategies</h1>
            
        </header>
    )
}

export default Header;