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
                        ? < NavItems click={this.handleClick}/> 
                        :   <div>

                                <label className="srOnly">
                                    Menu
                                </label>
                                <button 
                                    onClick={this.handleClick}>
                                    < FaBars  />
                                </button>

                            </div>}
                        
                    
                </div>
                
                <h1 >Oblique Strategies</h1>

            </header>
        )
    }
}


class NavItems extends Component {

    render(){
        return(

            <nav>
                <button onClick={this.props.click}>
                < FaTimes />
                </button>
                
                <ul>
                
                    <li>
                        <a href="#randomCollective">Collective Strategies</a>
                    </li>
                
                    <li>
                        <a href="#intro">Add to Deck</a>
                    </li>
                

                    <li>
                        <a href="#about">About</a>
                    </li>
                
                    <li>
                        <a href="https://twitter.com/sylaucoin" target="_blank" rel="noreferrer">Get In Touch</a>
                    </li>

                </ul>
                
            </nav>
        )   
    }
}

export default Header;