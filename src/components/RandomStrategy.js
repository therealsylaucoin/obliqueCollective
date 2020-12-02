import { Component, Fragment } from 'react';
import About from './About.js'
import { FaTwitter } from 'react-icons/fa';

class RandomStrategy extends Component {
    constructor(){
        super();
        this.state = {
            //Empty opbject to store the random strategy drawn from the deck
            randomStrategy: {
                author: '',
                cardnumber: null, 
                edition: null, 
                strategy: ''}
        }
    }


    //function to get a random card passing that random index + set state of the card
    handleClick = (array) => {
        //Get a random index
        let randomIndex = Math.floor((Math.random() * array.length))
        //setState of the randomStrategy 
        //Save the error message passed as props as a variable
        const errorMsg = this.props.errorMsg;
        this.setState({
            //Error Handling - If the result is undefined, set the state to the errorMsg passed as props.
            randomStrategy: array[randomIndex] !== undefined 
                ? array[randomIndex] 
                : errorMsg
        })
    }


    render(){
        return(

            <Fragment>
                {/* Get the relevent Strategy info and pring it on the page! */}
                <section className="strategy">
            
                    <div className="card">
                        {/* !!! ERROR HANDLE IN CASE NO STRATEGY!!!! this.props.errorMsg */ }
                        {/*The strategy: */}
                        <h2>{this.state.randomStrategy.strategy === '' 
                            ? 'Over One Hundred Worthwhile Dilemmas' 
                            : this.state.randomStrategy.strategy}
                        </h2>
            
                        <div>

                            {/* The edition + card number OR collective + author */}
                            <p>{this.state.randomStrategy.edition === null 
                                ? '' 
                                : 'Edition: ' + this.state.randomStrategy.edition}
                            </p>

                            <p>{this.state.randomStrategy.cardnumber === null 
                                ? '' 
                                : 'Card no. ' + this.state.randomStrategy.cardnumber }
                            </p>

                            {this.state.randomStrategy.strategy !== ''
                                ? <a
                                    href={`https://twitter.com/intent/tweet?text=${this.state.randomStrategy.strategy} %23obliquestrategies&url=https://obliquecollective.netlify.app`}
                                    target="_blank" 
                                    rel="noreferrer"
                                    aria-label="Post to Twitter" 
                                    >
                                        < FaTwitter/>
                                    </a>
                                : null}

                        </div>
            
                    </div>
            
                    <button onClick={() => {this.handleClick(this.props.strategyArray)}}>
                        
                        Draw random Strategy
                    </button>
            
                </section>
            
                < About />
            
            </Fragment>
        )
    }
}

export default RandomStrategy;