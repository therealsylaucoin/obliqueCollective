import { Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


class Header extends Component {
    constructor(){
        super();
        this.state = {
            showNav: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            showNav: this.state.showNav ? false : true
        })
    }

    render(){
        return(
            <header>
    
                <div>

                    {/* Expression to display the nav   */}
                    {this.state.showNav
                        ? < NavItems /> 
                        : < FaBars onClick={this.handleClick} />}
                        
                    
                </div>
                
                <h1 >Oblique Strategies</h1>

            </header>
        )
    }
}


const NavItems = () => {

    return(

        <nav>
            < FaTimes />
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

    )
    
}

export default Header;