//Using a function component for the Footer since it's purely presentational.
import { Fragment } from 'react';

const Footer = () => {
        return(

            <footer>

                <div className="wrapper">
                    
                    <p>Powered by <a href="http://brianeno.needsyourhelp.org/info" target="_blank" rel="noreferrer">Oblique Strategies API</a></p>
                    <p>Made by <a href="https://sylcodes.com" target="_blank" rel="noreferrer">Syl</a> @ <a href="https://www.junocollege.com" target="_blank" rel="noreferrer">Juno College</a> 2020</p>
                    
                </div>
                
            </footer>
        )
    
}

export default Footer;