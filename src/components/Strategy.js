import { Component } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { AnimateKeyframes } from "react-simple-animate";

//Create component!
class Strategy extends Component {
    constructor(){
        super();
        this.state = {
            randomCard: {
                author: '', //collective only
                cardNumber: null, //oblique = cardnumber
                edition: null, //oblique only
                strategy: '',
            },
            //to check that the card drawn is not the same as previous one
            previousIndex: null,
            totalDeckCount: null, //collective only
            collectiveCardNumber: null, //collectvie = index + 1, 
            //play state for the animation
            play: true
        }
    }

    //function to get a random card (passing that random index) + set state of the card
    handleClick = (array) => {
        //Get a random index
        let randomIndex = Math.floor((Math.random() * array.length))
        //if random index is different that previous one, 
        if (randomIndex === this.state.previousIndex){
            this.handleClick(this.props.cardArray);
        }  else {
            //setState of the randomStrategy (or errorMsg if if we dont get a result)
            this.setState({
                //Error Handling - If the result is undefined, set the state to the errorMsg passed as props.
                    randomCard: array[randomIndex] 
                        ? array[randomIndex] 
                        : this.props.errorMsg,
                    collectiveCardNumber: randomIndex + 1,
                    totalDeckCount : array.length,
                    previousIndex: randomIndex,
                    //setState for the animation depending on what the current state is (toggle)
                    play: this.state.play ? false : true
            })
        }
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
                        
                        {/*The strategy: if no result, print the string passed as props*/}
                        <h2>{this.state.randomCard.strategy 
                            ? this.state.randomCard.strategy
                            : this.props.coverCard }
                        </h2>
            
                        <div>
                            {/* The edition + card number (oblique only)*/}
                            <p>{this.state.randomCard.edition 
                                ? 'Edition: ' + this.state.randomCard.edition
                                : null }
                            </p>

                            <p>{this.state.randomCard.cardnumber  
                                ? 'Card no. ' + this.state.randomCard.cardnumber 
                                : null }
                            </p>

                            {/* contributor (collective only*/}
                            <p>{this.state.randomCard.author  
                                ? `Contributed by: ${this.state.randomCard.author}`
                                : null }
                            </p>

                            {/* card number and deck count (collective only) */}
                            <p>{this.state.randomCard.author  
                                ? `Card no. ${this.state.collectiveCardNumber} out of ${this.state.totalDeckCount}`
                                : null }
                            </p>

                            {/* Twitter icon allowing users to tweet the strategy directly */}
                            {this.state.randomCard.strategy 
                                ? <a
                                    href={`https://twitter.com/intent/tweet?text=${this.state.randomCard.strategy} %23obliquestrategies&url=https://obliquecollective.netlify.app`}
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
                        this.handleClick(this.props.cardArray)}}
                        >
                        Pick random strategy
                    </button>
            
            </section>
        )
    }
}

export default Strategy;