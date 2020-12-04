import { Component } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { AnimateKeyframes } from "react-simple-animate";

//Create component!
class RandomStrategy extends Component {
    constructor(){
        super();
        this.state = {
            //Empty opbject to store the random strategy drawn from the deck
            randomStrategy: {
                author: '',
                cardnumber: null, 
                edition: null, 
                strategy: ''},
            //play state for the animation
            play: true
        }
    }

    //function to get a random card (passing that random index) + set state of the card
    handleClick = (array) => {
        //Get a random index
        let randomIndex = Math.floor((Math.random() * array.length))
        //Save the error message passed as props as a variable 
        const errorMsg = this.props.errorMsg;
        //setState of the randomStrategy (or errorMsg if if we dont get a result )
        this.setState({
            //Error Handling - If the result is undefined, set the state to the errorMsg passed as props.
            randomStrategy: array[randomIndex] 
                ? array[randomIndex] 
                : errorMsg,
            //setState for the animation depending on what the current state is (toggle)
            play: this.state.play ? false : true
        })
    }


    render(){
        return(

            <section className="strategy">
                {/* Get the relevent Strategy info and print it on the page! */}

                {/* Animation for the card - fade in */}
                <AnimateKeyframes
                    play={this.state.play} 
                    duration={1}
                    keyframes={["opacity: 0", "opacity: 1"]}
                    iterationCount="1"
                    direction={this.state.play ? "normal" : "reverse"}
                >
            
                    <div className="card">
                        
                        {/*The strategy: (if no result, print the string*/}
                        <h2>{this.state.randomStrategy.strategy 
                            ? this.state.randomStrategy.strategy
                            : 'Over One Hundred Worthwhile Dilemmas' }
                        </h2>
            
                        <div>

                            {/* The edition + card number (if no result = empty string, aka wont print anything*/}
                            <p>{this.state.randomStrategy.edition 
                                ? 'Edition: ' + this.state.randomStrategy.edition
                                : '' }
                            </p>

                            <p>{this.state.randomStrategy.cardnumber  
                                ? 'Card no. ' + this.state.randomStrategy.cardnumber 
                                : '' }
                            </p>

                            {/* Twitter icon allowing users to tweet the strategy directly */}
                            {this.state.randomStrategy.strategy 
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

                    </AnimateKeyframes>
            
                    <button onClick={() => {
                        this.handleClick(this.props.strategyArray)}}
                        >
                        Draw random Strategy
                    </button>
            
            </section>
        )
    }
}

export default RandomStrategy;