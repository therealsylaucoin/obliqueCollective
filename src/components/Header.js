import { Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

//Create component!
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
                        ?   < NavItems 
                                click={this.handleClick}/> 
                        :   <button 
                                aria-label="Menu"
                                onClick={this.handleClick}>
                                < FaBars  />
                            </button>
                    }
                    
                </div>

                <div className="wrapper">

                    <h1>Oblique Strategies</h1>
                    <h2>Encouraging lateral thinking.</h2>
                    <p>How to use: To approach a problem with a new outlook, pick a random card from the original Oblique Strategies deck (or from the Collective Strategies contributed by users) and apply the proposed strategy to solve it. If you feel inspired to do so, please contribute a strategy of your own for others to benefit from in the future. Read more about the history of Oblique Strategies in the <a href="#about">About</a> section.</p>
                </div>


            </header>
        )
    }
}

//Create Nav component!
class NavItems extends Component {
    render(){
        return(

            <nav>

                <button 
                    aria-label="close menu"
                    onClick={this.props.click}>
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